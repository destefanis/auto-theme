var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 380, height: 290 });
// Color Mappings
import { getColorMappings } from "./colorMappings";
figma.ui.onmessage = function (msg) {
    // If nothing is selected update the whole page
    if (figma.currentPage.selection.length === 0) {
        var frameNodes = figma.currentPage.children;
        var allNodes = figma.currentPage.findAll();
        allNodes.map(function (selected) { return updateTheme(selected); });
    }
    else if (figma.currentPage.selection.length === 1) {
        // Find all the nodes
        var allNodes = figma.currentPage.selection[0].findAll();
        allNodes.unshift(figma.currentPage.selection[0]);
        // Update the nodes
        allNodes.map(function (selected) { return updateTheme(selected); });
    }
    else {
        var allNodes = [];
        var nodeLength = figma.currentPage.selection.length;
        // Find all the children nodes from the selected layers
        for (var i = 0; i < nodeLength; i++) {
            allNodes.push(figma.currentPage.selection[i].findAll());
        }
        allNodes.forEach(function (selectedNode) {
            selectedNode.map(function (selected) { return updateTheme(selected); });
        });
    }
    function updateTheme(node) {
        const { backgroundColorMappings, buttonColorMappings, textColorMappings } = getColorMappings(msg.type);
        switch (node.type) {
            case 'COMPONENT':
            case 'INSTANCE':
            case 'RECTANGLE':
            case 'ELLIPSE':
            case 'POLYGON':
            case 'STAR':
            case 'LINE':
            case 'BOOLEAN_OPERATION':
            case 'FRAME':
            case 'VECTOR': {
                // Check to see if the node has a style
                if (node.fillStyleId) {
                    // Fetch the style by using the ID.
                    var style = figma.getStyleById(node.fillStyleId);
                    // Pass in the layer we want to change, the style the node has
                    // and the set of mappings we want to check against.
                    replaceStyles(node, style, backgroundColorMappings);
                }
                if (node.backgroundStyleId) {
                    // Some elements have backgrounds instead of fills.
                    var style = figma.getStyleById(node.backgroundStyleId);
                    replaceBackgrounds(node, style, backgroundColorMappings);
                }
                if (node.strokeStyleId) {
                    // And some elements might have strokes.
                    var style = figma.getStyleById(node.strokeStyleId);
                    replaceStrokes(node, style, backgroundColorMappings);
                    break;
                }
            }
            case 'TEXT': {
                // Check to see if the node has a style
                if (node.fillStyleId) {
                    // Fetch the style by using the ID.
                    var style = figma.getStyleById(node.fillStyleId);
                    // Pass in the layer we want to change, the style the node has
                    // and the set of mappings we want to check against.
                    replaceBackgrounds(node, style, backgroundColorMappings);
                    replaceFills(node, style, textColorMappings);
                }
            }
        }
        {
            // do nothing
        }
    }
};
// Swap styles with the corresponding/mapped styles
function replaceStyles(node, style, mappings, applyStyle) {
    return __awaiter(this, void 0, void 0, function* () {
        // Find the style the ID corresponds to in the team library
        var importedStyle = yield figma.importStyleByKeyAsync(style.key);
        // Once the promise is resolved, then see if the
        // key matches anything in the mappings object.
        // If it's null, no mapping exists yet.
        if (!mappings[importedStyle.key]) {
            var mappingStyle = mappings[importedStyle.key];
            // Use the mapping value to fetch the official style.
            var newStyle = yield figma.importStyleByKeyAsync(mappingStyle.mapsToKey);
            applyStyle(node, newStyle.id);
        }
    });
}
// Name the fuctions,
// so its easier to parse.
function replaceBackgrounds(node, style, mappings) {
    return __awaiter(this, void 0, void 0, function* () {
        yield replaceStyles(node, style, mappings, (node, styleId) => node.backgroundStyleId = styleId);
    });
}
function replaceFills(node, style, mappings) {
    return __awaiter(this, void 0, void 0, function* () {
        yield replaceStyles(node, style, mappings, (node, styleId) => node.fillStyleId = styleId);
    });
}
function replaceStrokes(node, style, mappings) {
    return __awaiter(this, void 0, void 0, function* () {
        yield replaceStyles(node, style, mappings, (node, styleId) => node.strokeStyleId = styleId);
    });
}
;
