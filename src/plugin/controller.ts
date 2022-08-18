// Plugin window dimensions
figma.showUI(__html__, { width: 320, height: 358 });

// Imported themes
import { darkTheme } from "./dark-to-light-theme";
import { lightTheme } from "./light-to-dark-theme";

// Utility function for serializing nodes to pass back to the UI.
function serializeNodes(nodes) {
  let serializedNodes = JSON.stringify(nodes, [
    "name",
    "type",
    "children",
    "id"
  ]);

  return serializedNodes;
}

// Utility function for flattening the
// selection of nodes in Figma into an array.
const flatten = obj => {
  const array = Array.isArray(obj) ? obj : [obj];
  return array.reduce((acc, value) => {
    acc.push(value);
    if (value.children) {
      acc = acc.concat(flatten(value.children));
      delete value.children;
    }
    return acc;
  }, []);
};

figma.ui.onmessage = msg => {
  let skippedLayers = [];

  if (msg.type === "run-app") {
    // If nothing's selected, we tell the UI to keep the empty state.
    if (figma.currentPage.selection.length === 0) {
      figma.ui.postMessage({
        type: "selection-updated",
        message: 0
      });
    } else {
      let selectedNodes = flatten(figma.currentPage.selection);

      // Update the UI with the number of selected nodes.
      // This will display our theming controls.
      figma.ui.postMessage({
        type: "selection-updated",
        message: serializeNodes(selectedNodes)
      });
    }
  }

  // When a theme is selected
  if (msg.type === "theme-update") {
    const nodesToTheme = figma.currentPage.selection;

    if (msg.message === "dark-to-light-theme") {
      // Update the layers with this theme, by passing in the
      // selected nodes and the theme object.
      nodesToTheme.map(selected => updateTheme(selected, darkTheme));
    }

    if (msg.message === "light-to-dark-theme") {
      // Update the layers with this theme, by passing in the
      // selected nodes and the theme object.
      nodesToTheme.map(selected => updateTheme(selected, lightTheme));
    }

    // Need to wait for some promises to resolve before
    // sending the skipped layers back to the UI.
    setTimeout(function() {
      figma.ui.postMessage({
        type: "layers-skipped",
        message: serializeNodes(skippedLayers)
      });
    }, 500);

    figma.notify(`Theming complete`, { timeout: 750 });
  }

  // When a layer is selected from the skipped layers.
  if (msg.type === "select-layer") {
    let layer = figma.getNodeById(msg.id);
    let layerArray = [];

    // Using selection and viewport requires an array.
    layerArray.push(layer);

    // Moves the layer into focus and selects so the user can update it.
    figma.notify(`Layer ${layer.name} selected`, { timeout: 750 });
    figma.currentPage.selection = layerArray;
    figma.viewport.scrollAndZoomIntoView(layerArray);
  }

  // Swap styles with the corresponding/mapped styles
  async function replaceStyles(
    node,
    style,
    mappings,
    applyStyle: (node, styleId) => void
  ) {
    // Find the style the ID corresponds to in the team library
    let importedStyle = await figma.importStyleByKeyAsync(style.key);

    // Once the promise is resolved, then see if the
    // key matches anything in the mappings object.
    if (mappings[importedStyle.key] !== undefined) {
      let mappingStyle = mappings[importedStyle.key];

      // Use the mapping value to fetch the official style.
      let newStyle = await figma.importStyleByKeyAsync(mappingStyle.mapsToKey);

      // Update the node with the new color.
      applyStyle(node, newStyle.id);
    } else {
      skippedLayers.push(node);
    }
  }

  // Fix layers with no style attached to them, just hex colors
  async function fixStyles(
    node,
    nodeType,
    style,
    mappings,
    applyStyle: (node, styleId) => void
  ) {
    let styleName = nodeType.toLowerCase() + " " + style;
    console.log(styleName);
    // See if the key matches anything in the mappings object.
    if (mappings[styleName] !== undefined) {
      let mappingStyle = mappings[styleName];

      // Use the mapping value to fetch the official style.
      let newStyle = await figma.importStyleByKeyAsync(mappingStyle.mapsToKey);

      // Update the node with the new color.
      applyStyle(node, newStyle.id);
    } else {
      skippedLayers.push(node);
    }
  }

  async function replaceComponent(
    node,
    key,
    mappings,
    applyComponent: (node, masterComponent) => void
  ) {
    let componentToSwitchWith = mappings[key];
    let importedComponent = await figma.importComponentByKeyAsync(
      componentToSwitchWith.mapsToKey
    );
    // Switch the existing component to a new component.
    applyComponent(node, importedComponent);
  }

  async function swapComponent(node, key, mappings) {
    await replaceComponent(
      node,
      key,
      mappings,
      (node, masterComponent) => (node.masterComponent = masterComponent)
    );
  }

  async function replaceFills(node, style, mappings) {
    await replaceStyles(
      node,
      style,
      mappings,
      (node, styleId) => (node.fillStyleId = styleId)
    );
  }

  async function replaceNoStyleFill(node, nodeType, style, mappings) {
    await fixStyles(
      node,
      nodeType,
      style,
      mappings,
      (node, styleId) => (node.fillStyleId = styleId)
    );
  }

  async function replaceStrokes(node, style, mappings) {
    await replaceStyles(
      node,
      style,
      mappings,
      (node, styleId) => (node.strokeStyleId = styleId)
    );
  }

  async function replaceEffects(node, style, mappings) {
    await replaceStyles(
      node,
      style,
      mappings,
      (node, styleId) => (node.effectStyleId = styleId)
    );
  }

  // Updates the node with the new theme depending on
  // the type of the node.
  function updateTheme(node, theme) {
    switch (node.type) {
      case "COMPONENT":
      case "COMPONENT_SET":
      case "RECTANGLE":
      case "GROUP":
      case "ELLIPSE":
      case "POLYGON":
      case "STAR":
      case "LINE":
      case "BOOLEAN_OPERATION":
      case "FRAME":
      case "LINE":
      case "VECTOR": {
        if (node.children) {
          node.children.forEach(child => {
            updateTheme(child, theme);
          });
        }
        if (node.fills) {
          if (node.fillStyleId && typeof node.fillStyleId !== "symbol") {
            let style = figma.getStyleById(node.fillStyleId);
            // Pass in the layer we want to change, the style ID the node is using.
            // and the set of mappings we want to check against.
            replaceFills(node, style, theme);
          } else if (node.fillStyleId === "") {
            // No style on the layer? Let's fix it for them.
            // First we need the fill type determined above ex:is it #ffffff?), then
            // we pass that hex into a new function.
            let style = determineFill(node.fills);
            let nodeType = node.type;
            replaceNoStyleFill(node, nodeType, style, theme);
          } else {
            skippedLayers.push(node);
          }
        }

        if (node.strokeStyleId) {
          replaceStrokes(node, figma.getStyleById(node.strokeStyleId), theme);
        }

        if (node.effectStyleId) {
          replaceEffects(node, figma.getStyleById(node.effectStyleId), theme);
        }

        break;
      }
      case "INSTANCE": {
        let componentKey = node.masterComponent.key;
        // If this instance is in mapping, then call it and skip it's children
        // otherwise check for the normal differences.
        if (theme[componentKey] !== undefined) {
          swapComponent(node, componentKey, theme);
        } else {
          if (node.fills) {
            if (node.fillStyleId && typeof node.fillStyleId !== "symbol") {
              let style = figma.getStyleById(node.fillStyleId);
              // Pass in the layer we want to change, the style ID the node is using.
              // and the set of mappings we want to check against.
              replaceFills(node, style, theme);
            } else if (node.fillStyleId === "") {
              // No style on the layer? Let's fix it for them.
              // First we need the fill type determined above ex:is it #ffffff?), then
              // we pass that hex into a new function.
              let style = determineFill(node.fills);
              let nodeType = node.type;
              replaceNoStyleFill(node, nodeType, style, theme);
            } else {
              skippedLayers.push(node);
            }
          }

          if (node.strokeStyleId) {
            replaceStrokes(node, figma.getStyleById(node.strokeStyleId), theme);
          }

          if (node.effectStyleId) {
            replaceEffects(node, figma.getStyleById(node.effectStyleId), theme);
          }

          if (node.children) {
            node.children.forEach(child => {
              updateTheme(child, theme);
            });
          }
        }
        break;
      }
      case "TEXT": {
        if (node.fillStyleId && typeof node.fillStyleId !== "symbol") {
          replaceFills(node, figma.getStyleById(node.fillStyleId), theme);
        } else if (node.fillStyleId === "") {
          let style = determineFill(node.fills);
          let nodeType = node.type;
          replaceNoStyleFill(node, nodeType, style, theme);
        } else {
          skippedLayers.push(node);
        }
      }
      default: {
        // do nothing
      }
    }
  }

  // Determine a nodes fills
  function determineFill(fills) {
    let fillValues = [];
    let rgbObj;

    fills.forEach(fill => {
      if (fill.type === "SOLID" && fill.visible === true) {
        rgbObj = convertColor(fill.color);
        fillValues.push(RGBToHex(rgbObj["r"], rgbObj["g"], rgbObj["b"]));
      }
    });

    return fillValues[0];
  }

  // Utility functions for color conversion.
  function convertColor(color) {
    const colorObj = color;
    const figmaColor = {};

    Object.entries(colorObj).forEach(cf => {
      const [key, value] = cf;

      if (["r", "g", "b"].includes(key)) {
        figmaColor[key] = (255 * (value as number)).toFixed(0);
      }
      if (key === "a") {
        figmaColor[key] = value;
      }
    });
    return figmaColor;
  }

  function RGBToHex(r, g, b) {
    r = Number(r).toString(16);
    g = Number(g).toString(16);
    b = Number(b).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  }
};
