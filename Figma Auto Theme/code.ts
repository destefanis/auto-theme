figma.showUI(__html__, {width: 380, height: 350});

const themeMapping = {
  // Headings
  '5c1691cbeaaf4270107d34f1a12f02fdd04afa02': {
    name: 'Dark / Header / Primary (White)',
    mapsToName: "Light / Header / Primary (900)",
    mapsToKey: 'b19a14675b8adeb1528ab5f84e57b2eeed10d46c',
  },
  'bc090cb3b1c7313ae276acbd791b5b87b478ec59': {
    name: "Dark / Header / Secondary (300)",
    mapsToName: "Light / Header / Secondary (600)",
    mapsToKey: "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b",
  },
  // Text
  "5c77a96137b698b5575557c069cabd6877d66e1e": {
    name: 'Dark / Text / Normal (200)',
    mapsToName: "Light / Text / Normal (700)",
    mapsToKey: "546c7d46e754ac2b23b338783d72f206b77b6436",
  },
  '5d84ad92f3ad152f196e2093a3c0542a08dfba11': {
    name: "Dark / Text / Muted (400)",
    mapsToName: "Light / Text / Muted (500)",
    mapsToKey: "7d8703ec132ddaf6968f6d190d1e80031c559d7c",
  },
  'bf03232753079bdd5bec6c55343b659876b5283f': {
    name: "Dark / Text / Link",
    mapsToName: "Light / Text / Link",
    mapsToKey: "64d3058dd508a4985670b2d19418a06a3503c9c2",
  },
  // Interactive Text & Icons
  '287463bade90c1eed5ea4cb0b5d63794daa8aec2': {
    name: "Dark / Interactive Text & Icons / Normal (300)",
    mapsToName: "Light / Interactive Text & Icons / Normal (600)",
    mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682",
  },
  '502dcdf04992818dcbaed125ad711b446dee4c68': {
    name: "Dark / Interactive Text & Icons / Hover (200)",
    mapsToName: "Light / Interactive Text & Icons / Hover (700)",
    mapsToKey: "e9542e95adf3bbe74286c2cf279fee64f7ba3279",
  },
  '3eddc15e90bbd7064aea7cc13dc13e23a712f0b0': {
    name: "Dark / Interactive Text & Icons / Active (White)",
    mapsToName: "Light / Interactive Text & Icons / Active (900)",
    mapsToKey: "620c98e8f9255a6107dee91745669e5b702b413c",
  },
  'fa698aa2a724522a7c29efb0a662aec75a1be5a1': {
    name: "Dark / Interactive Text & Icons / Muted (500)",
    mapsToName: "Light / Interactive Text & Icons / Muted (300)",
    mapsToKey: "9328cd78a39149b070d68f98d9fe4df7a92bf67d",
  },
  // Backgrounds
  '4b93d40f61be15e255e87948a715521c3ae957e6': {
    name: 'Dark / Background / Primary (600)',
    mapsToName: "Light / Background / Primary (White)",
    mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c",
  },
  'fb1358e5bd6dec072801298238cf49ff77b79a4b': {
    name: "Dark / Background / Secondary (630)",
    mapsToName: "Light / Background / Secondary (130)",
    mapsToKey: "83704278c845a6a7ceb1f837387972ccb6d41960",
  },
  "ef179b6abe6cb8779857e05a6333d33f7a2b9320": {
    name: "Dark / Background / Tertiary (700)",
    mapsToName: "Light / Background / Tertiary (200)",
    mapsToKey: "dbd02a76b7b77c1976114c04068f0fbc22015fab",
  },
  "3dd0e30ce0a8287eb91ec1fbeff92031e634ed01": {
    name: "Dark / Background / Accent (500)",
    mapsToName: "Light / Interactive Text & Icons / Muted (300)",
    mapsToKey: "9328cd78a39149b070d68f98d9fe4df7a92bf67d",
  },
  "11516f4b43f381afb5a6bdf2c34b9437f0eecde1": {
    name: "Dark / Background / Floating (800)",
    mapsToName: "Light / Background / Floating (White)",
    mapsToKey: "6c8b08a42f9614842e880bf7bb795014d8fbae94",
  },
  // Background Modifiers
  'd6c9270834b11c99ee651f0f5072ad2c63701165': {
    name: 'Dark / Background Mod / Hover',
    mapsToName: "Light / Background Mod / Hover",
    mapsToKey: "35307396ae29aaeb583ae65891c69ec689f0c41e",
  },
  "bcf890d7a215c65deef97fb3d3f5bcebc9869bab": {
    name: "Dark / Background Mod / Active",
    mapsToName: "Light / Background Mod / Active",
    mapsToKey: "ddadf76919d9bacb925242a024dc1e2f5f517a46",
  },
  "ce012db42f35fb58b4fe1d6d8b46c4905a8fad0a": {
    name: "Dark / Background Mod / Selected",
    mapsToName: "Light / Background Mod / Selected",
    mapsToKey: "5af2eaf14901472c26b641997796bdba76ee1794",
  },
  "a6a3dc153f0e589408186176ebf8f20ed2f9bda3": {
    name: "Dark / Background Mod / Accent",
    mapsToName: "Light / Background Mod / Accent",
    mapsToKey: "08c7091f8d6950dc3f616afe8ed45b086f9124c7",
  },
}

figma.ui.onmessage = msg => {

  if (msg.type === 'update-theme') {

    // If nothing is selected update the whole page
    if (figma.currentPage.selection.length === 0) {
      const frameNodes = figma.currentPage.children;
      const allNodes = figma.currentPage.findAll();
      allNodes.map(selected => updateTheme(selected));
    }
    else if (figma.currentPage.selection.length === 1) {
      // Find all the nodes
      let allNodes = figma.currentPage.selection[0].findAll();
      allNodes.unshift(figma.currentPage.selection[0]);
      // Update the nodes
      allNodes.map(selected => updateTheme(selected));
    }
    else {
      let allNodes = [];
      let nodeLength = figma.currentPage.selection.length;

      // Find all the children nodes from the selected layers
      for (let i = 0; i < nodeLength; i++) {
        allNodes.push(figma.currentPage.selection[i].findAll());
      }

      allNodes.forEach(function(selectedNode) {
        selectedNode.map(selected => updateTheme(selected));
      });
    }
  }

  function updateTheme(node) {
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
          let style = figma.getStyleById(node.fillStyleId);
          // Pass in the layer we want to change, the style the node has
          // and the set of mappings we want to check against.
          replaceStyles(node, style, themeMapping);
        } else if (node.backgroundStyleId) {
          // Some elements have backgrounds instead of fills.
          let style = figma.getStyleById(node.backgroundStyleId);
          replaceBackground(node, style, themeMapping);
        }
        break
      }
      case 'TEXT': {
        if (node.fillStyleId) {
          let style = figma.getStyleById(node.fillStyleId);
          replaceStyles(node, style, themeMapping);
        }
      }
      default: {
        // do nothing
      }
    }
  }

  // Replaces fills with corresponding styles
  function replaceStyles(node, style, mappings) {
    // Find the style the ID corresponds to in the team library
    let importedStyle = figma.importStyleByKeyAsync(style.key);
          
    // Once the promise is resolved, then see if the
    // key matches anything in the mappings object.
    importedStyle.then((object) => {

      // If it's null, no mapping exists yet.
      if (mappings[object.key] !== undefined) {
        let mappingStyle = mappings[object.key];

        // Use the mapping value to fetch the official style.
        let newStyle = figma.importStyleByKeyAsync(mappingStyle.mapsToKey);

        newStyle.then(function(object) {
          // Update the current style with the mapping.
          node.fillStyleId = object.id;
        });
      }
    });
  }

  // Updates backgrounds with styles @todo combine this function with replaceStyles
  function replaceBackground(node, style, mappings) {
    let importedStyle = figma.importStyleByKeyAsync(style.key);

    importedStyle.then((object) => {
      if (mappings[object.key] !== undefined) {
        let mappingStyle = mappings[object.key];
      
        let newStyle = figma.importStyleByKeyAsync(mappingStyle.mapsToKey);

        newStyle.then(function(object) {
          node.backgroundStyleId = object.id;
        });
      }
    });
  }


  figma.closePlugin();
};