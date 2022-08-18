// For mapping from dark to light theme.
const darkTheme = {
  // Components (swaps instances rather ie Name / Dark to Name / Light)
  f0d4aa5e63fff4392e3b3c22884523369f5d0424: {
    componentName: "iPhone X Status Bar / Dark",
    mapsToKey: "33425bd93c1b8cea071df9b5297f0b19583a643b"
  },
  "5b8dce7a790466da546d319a69f5de220e1a66f1": {
    componentName: "iPhone X Home Indicator / Dark",
    mapsToKey: "0489bde7fd0346a97eff3170167714838a8ffb9c"
  },
  e9622ab25248f31fb02b6faa00308b8faa4acb3e: {
    componentName: "Header / Guild / Dark",
    mapsToKey: "00230f03c08e00a787e9c2659c3165bcad7ae06b"
  },
  "4592fb98edf78fdeea07d23445de948286e7c5f2": {
    componentName: "Header / DM",
    mapsToKey: "ff8b5c71a60fc212647c40e481c0bf1886a3ec85"
  },
  "46d6bed4edd9482b1452afab5ab0292b516c9e09": {
    componentName: "Navigation Tab / Dark",
    mapsToKey: "64d16554561a7496b2d23854074ce923655918e0"
  },
  "9e0a9f99024fb9baedcacbb123c84d7cc4b8f87a": {
    componentName: "Guild Selected / Dark",
    mapsToKey: "a9231a3d9fac5b7d26d56904c7b28d5d00bfff97"
  },
  c25d89953041d095215c972fa55dc6f7776d9a54: {
    componentName: "Messages Selected / Dark",
    mapsToKey: "8c80d5bd7bdd80acec9793a719f6caaebba1c6ee"
  },
  // Android System Components
  "3588fe4d5a302b2fca2be2b0cb5c12e2a2f41c05": {
    componentName: "Status Bar / Dark",
    mapsToKey: "790d7d3d884a6d3dadc79bf3c48a4918f4c16ba7"
  },
  "43c14ca23834d2aa3bf1e027a0635c7393e87378": {
    componentName: "Navigation Tab / Dark",
    mapsToKey: "bd56c3e89162d8274c4ca591f2ca1e1064658570"
  },
  // Desktop Components
  d31d651767116b73f9209c5362669782ff3a8a25: {
    componentName: "Windows Bar / Dark",
    mapsToKey: "05fc2a6b4207baa8f672dc9e8a5d750c5d60711b"
  },
  // Headings
  "5c1691cbeaaf4270107d34f1a12f02fdd04afa02": {
    name: "Dark / Header / Primary (White)",
    mapsToName: "Light / Header / Primary (900)",
    mapsToKey: "b19a14675b8adeb1528ab5f84e57b2eeed10d46c"
  },
  "text #ffffff": {
    name: "Unstyled Dark Header",
    mapsToName: "Light / Header / Primary (900)",
    mapsToKey: "b19a14675b8adeb1528ab5f84e57b2eeed10d46c"
  },
  "text #b9bbbe": {
    name: "Unstyled Dark Secondary Header",
    mapsToName: "themes/light/header/header-secondary",
    mapsToKey: "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b"
  },
  "text #a3a6aa": {
    name: "Unstyled Dark Muted",
    mapsToName: "themes/light/text/text-muted",
    mapsToKey: "7d8703ec132ddaf6968f6d190d1e80031c559d7c"
  },
  bc090cb3b1c7313ae276acbd791b5b87b478ec59: {
    name: "Dark / Header / Secondary (300)",
    mapsToName: "Light / Header / Secondary (600)",
    mapsToKey: "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b"
  },
  // Text
  "5c77a96137b698b5575557c069cabd6877d66e1e": {
    name: "Dark / Text / Normal (200)",
    mapsToName: "Light / Text / Normal (700)",
    mapsToKey: "546c7d46e754ac2b23b338783d72f206b77b6436"
  },
  "5d84ad92f3ad152f196e2093a3c0542a08dfba11": {
    name: "Dark / Text / Muted (400)",
    mapsToName: "Light / Text / Muted (500)",
    mapsToKey: "7d8703ec132ddaf6968f6d190d1e80031c559d7c"
  },
  bf03232753079bdd5bec6c55343b659876b5283f: {
    name: "Dark / Text / Link",
    mapsToName: "Light / Text / Link",
    mapsToKey: "64d3058dd508a4985670b2d19418a06a3503c9c2"
  },
  "6e4aef7677e2ea82c87465276522da7ef5a07121": {
    name: "themes/dark/text/text-brand",
    mapsToName: "themes/light/text/text-brand",
    mapsToKey: "15320fd498dcd4e113c5bd587dca2d11d4492e84"
  },
  "094cbaac0817be7bbfd8292cb98fc1e515e7ea0e": {
    name: "themes/dark/text/text-danger",
    mapsToName: "themes/light/text/text-danger",
    mapsToKey: "c8d237080d38671193403b49cdc6a5778a14bf45"
  },
  df0622bb33232fe041c468e8d3dd37e5428b10e7: {
    name: "themes/dark/text/text-warning",
    mapsToName: "themes/light/text/text-warning",
    mapsToKey: "0d95a7d4d30ef99ebd04abd5b2dd4708913f765b"
  },
  "7733117cf1ef570b77332c86ba783af6cb735fc1": {
    name: "themes/dark/text/text-positive",
    mapsToName: "themes/light/text/text-positive",
    mapsToKey: "71f64b08bdec4daf747a850b128e0994c4593c04"
  },
  // Interactive Text & Icons
  "287463bade90c1eed5ea4cb0b5d63794daa8aec2": {
    name: "Dark / Interactive Text & Icons / Normal (300)",
    mapsToName: "Light / Interactive Text & Icons / Normal (600)",
    mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
  },
  "boolean_operation #b9bbbe": {
    name: "Dark / Interactive Text & Icons / Normal (300)",
    mapsToName: "Light / Interactive Text & Icons / Normal (600)",
    mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
  },
  "boolean_operation #757575": {
    name: "Dark / Interactive Text & Icons / Normal (300)",
    mapsToName: "Light / Interactive Text & Icons / Normal (600)",
    mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
  },
  "vector #757575": {
    name: "Dark / Interactive Text & Icons / Normal (300)",
    mapsToName: "Light / Interactive Text & Icons / Normal (600)",
    mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
  },
  "vector #b9bbbe": {
    name: "Dark / Interactive Text & Icons / Normal (300)",
    mapsToName: "Light / Interactive Text & Icons / Normal (600)",
    mapsToKey: "9c23a031773711e026394f4354661c37ee5b4682"
  },
  "502dcdf04992818dcbaed125ad711b446dee4c68": {
    name: "Dark / Interactive Text & Icons / Hover (200)",
    mapsToName: "themes/light/interactive/interactive-hover",
    mapsToKey: "e9542e95adf3bbe74286c2cf279fee64f7ba3279"
  },
  "3eddc15e90bbd7064aea7cc13dc13e23a712f0b0": {
    name: "Dark / Interactive Text & Icons / Active (White)",
    mapsToName: "Light / Interactive Text & Icons / Active (900)",
    mapsToKey: "620c98e8f9255a6107dee91745669e5b702b413c"
  },
  "boolean_operation #ffffff": {
    name: "Dark / Interactive Text & Icons / Active (White)",
    mapsToName: "Light / Interactive Text & Icons / Active (900)",
    mapsToKey: "620c98e8f9255a6107dee91745669e5b702b413c"
  },
  fa698aa2a724522a7c29efb0a662aec75a1be5a1: {
    name: "Dark / Interactive Text & Icons / Muted (500)",
    mapsToName: "Light / Interactive Text & Icons / Muted (300)",
    mapsToKey: "9328cd78a39149b070d68f98d9fe4df7a92bf67d"
  },
  // Backgrounds
  "4b93d40f61be15e255e87948a715521c3ae957e6": {
    name: "Dark / Background / Primary (600)",
    mapsToName: "Light / Background / Primary (White)",
    mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
  },
  "frame #36393f": {
    name: "Dark Primary Background",
    mapsToName: "Light / Background / Primary (White)",
    mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
  },
  "rectangle #36393f": {
    name: "Dark Primary Background",
    mapsToName: "Dark / Background / Primary (600)",
    mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
  },
  "frame #5865f2": {
    name: "Unstyled Brand",
    mapsToName: "other/blurple (brand-500)",
    mapsToKey: "25b165222f45fd70dc3c8e68d1a25f8d379a597d"
  },
  "rectangle #5865f2": {
    name: "Unstyled Brand",
    mapsToName: "other/blurple (brand-500)",
    mapsToKey: "25b165222f45fd70dc3c8e68d1a25f8d379a597d"
  },
  fb1358e5bd6dec072801298238cf49ff77b79a4b: {
    name: "Dark / Background / Secondary (630)",
    mapsToName: "Light / Background / Primary (White)",
    mapsToKey: "83704278c845a6a7ceb1f837387972ccb6d41960"
  },
  abf9ad88ae1ade1a4b945b012f0965c9cdc068c9: {
    name: "Dark / Background / Secondary Alternate",
    mapsToName: "Light / Background / Secondary Alternate",
    mapsToKey: "6acd84c794796d112d4e9d22c4c8a5cae940a61d"
  },
  ef179b6abe6cb8779857e05a6333d33f7a2b9320: {
    name: "Dark / Background / Tertiary (700)",
    mapsToName: "Light / Background / Tertiary (200)",
    mapsToKey: "dbd02a76b7b77c1976114c04068f0fbc22015fab"
  },
  "3dd0e30ce0a8287eb91ec1fbeff92031e634ed01": {
    name: "Dark / Background / Accent (500)",
    mapsToName: "Light / Background / Accent (500)",
    mapsToKey: "7a199ce029a847f3a361dfb6a6e0ee4e4ba84d4f"
  },
  "11516f4b43f381afb5a6bdf2c34b9437f0eecde1": {
    name: "Dark / Background / Floating (800)",
    mapsToName: "Light / Background / Floating (White)",
    mapsToKey: "6c8b08a42f9614842e880bf7bb795014d8fbae94"
  },
  bfcdf063eb2c1edb446ba5d7880da6a324cc9b4f: {
    name: "Dark / Override / Read Channels",
    mapsToName: "Light / Override / Read Channels 360",
    mapsToKey: "634ef95b53ab529a774f27ed16be07c0b3fb3a5f"
  },
  b659c283950f8b335922f52e40cefd3cf679d297: {
    name: "themes/dark/background/status-danger-background",
    mapsToName: "themes/light/background/status-danger-background",
    mapsToKey: "c592ea0b26929cf1374f973b857027dbd21ffb12"
  },
  "3dbd679897876b69bc9cc8fa38be83c525ac5ed5": {
    name: "themes/dark/background/status-warning-background",
    mapsToName: "themes/light/background/status-warning-background",
    mapsToKey: "45f2139348b50263fda4704d4a9accea74540dcc"
  },
  "746e170ac6e7ba80d171f01313735a3ec5535ef8": {
    name: "themes/dark/background/status-positive-background",
    mapsToName: "themes/light/background/status-positive-background",
    mapsToKey: "2a135fa63c0cea473936ced51ccd767b2f156739"
  },
  da21c08d5f887ae8d6195d7f8a7585219d670b93: {
    name: "themes/dark/background/background-mentioned",
    mapsToName: "themes/light/background/background-mentioned",
    mapsToKey: "30d44092c13231213143b50015907463dd1b6211"
  },
  "39c91bf62536cb1c6f51087853c35afcc6462bac": {
    name: "themes/dark/background/background-mentioned-hover",
    mapsToName: "themes/light/background/background-mentioned-hover",
    mapsToKey: "4d15ee684eb9fd6cb114d7fb585c83c9b0a598fd"
  },
  "1054e0c4bc3e52ae2c7c48aa0d0f95ed5d998587": {
    name: "themes/dark/background/background-message-hover",
    mapsToName: "themes/light/background/background-message-hover",
    mapsToKey: "440a2d66490b7162417c740e66355f39d7b9e41a"
  },
  "72a70771ff2a268130e7352250f374722f4d8bfe": {
    name: "themes/dark/background/background-mobile-primary",
    mapsToName: "themes/light/background/background-mobile-primary",
    mapsToKey: "5747d5e2f1e6047746c77e9368e8d21324eb93d9"
  },
  "251f85bc338c5411608c2dc141a538305ab6b4c1": {
    name: "themes/dark/background/background-mobile-secondary",
    mapsToName: "themes/light/background/background-mobile-secondary",
    mapsToKey: "de9f518c35096095c02c215543174a04900b07d7"
  },
  de9f518c35096095c02c215543174a04900b07d7: {
    name: "themes/light/background/background-mobile-secondary",
    mapsToName: "themes/dark/background/background-mobile-secondary",
    mapsToKey: "251f85bc338c5411608c2dc141a538305ab6b4c1"
  },
  "1e1caa8f31ed3bb7ce6e6ce20dfe3187b20766c8": {
    name: "themes/dark/background/background-nested-floating",
    mapsToName: "themes/light/background/background-nested-floating",
    mapsToKey: "1fae53b19be2fe85aa44529cd3243c7b280173f1"
  },
  // Background Modifiers
  d6c9270834b11c99ee651f0f5072ad2c63701165: {
    name: "Dark / Background Mod / Hover",
    mapsToName: "Light / Background Mod / Hover",
    mapsToKey: "35307396ae29aaeb583ae65891c69ec689f0c41e"
  },
  bcf890d7a215c65deef97fb3d3f5bcebc9869bab: {
    name: "Dark / Background Mod / Active",
    mapsToName: "Light / Background Mod / Active",
    mapsToKey: "ddadf76919d9bacb925242a024dc1e2f5f517a46"
  },
  ce012db42f35fb58b4fe1d6d8b46c4905a8fad0a: {
    name: "Dark / Background Mod / Selected",
    mapsToName: "Light / Background Mod / Selected",
    mapsToKey: "5af2eaf14901472c26b641997796bdba76ee1794"
  },
  a6a3dc153f0e589408186176ebf8f20ed2f9bda3: {
    name: "Dark / Background Mod / Accent",
    mapsToName: "Light / Background Mod / Accent",
    mapsToKey: "08c7091f8d6950dc3f616afe8ed45b086f9124c7"
  },
  // Status
  "61c493d9d14f2a5ae52c2037149773f0cd7690a5": {
    name: "themes/dark/status/status-positive",
    mapsToName: "themes/light/status/status-positive",
    mapsToKey: "6faa6d09b47caeb32fa0f5f81c561dcb7d68e9b1"
  },
  "0ff4d563aae53dd8012f78a67f9fd182693a0f21": {
    name: "themes/dark/status/status-danger",
    mapsToName: "themes/light/status/status-danger",
    mapsToKey: "0c9cfa27f153e6a5a9954242bb6ae3cac02d4468"
  },
  f719fb8e7bf04342010ecb37165e55aa8a638d35: {
    name: "themes/dark/status/status-warning",
    mapsToName: "themes/light/status/status-warning",
    mapsToKey: "9fa2f99cffe7ba587f259e98fb4de12c0b893223"
  },
  // Other
  "6c54be693a4bbdff6fa4c02f672bc5c9e4654f8b": {
    name: "themes/dark/other/channeltextarea-background",
    mapsToName: "themes/light/other/channeltextarea-background",
    mapsToKey: "3c098a8d09acbd25ef37e7fc0b657c2dc78f243e"
  },
  a4d76cf75156ab760df1685a30dadab20724010e: {
    name: "themes/dark/other/focus-primary0",
    mapsToName: "themes/light/other/focus-primary",
    mapsToKey: "d1dbae483f4eefcf5adccfbba8e6d50dbef1ec27"
  },
  "7337ac931b2c9b699d44e6e783637e5afac50298": {
    name: "themes/dark/other/control-brand-foreground",
    mapsToName: "themes/light/other/control-brand-foreground",
    mapsToKey: "bbdc5cb26595f77283b8dfe51e659c5bfdc6a2d0"
  },
  a926774d558d0e70f505df697c21c12dc4270206: {
    name: "themes/dark/other/scrollbar-thin-thumb",
    mapsToName: "themes/light/other/scrollbar-thin-thumb",
    mapsToKey: "084969be9bfee752064df1c504b6ba07a8d727ad"
  },
  "2ab24b1a3901fae7960deb8a36e49f0d6b1732af": {
    name: "themes/dark/other/scrollbar-auto-thumb",
    mapsToName: "themes/light/other/scrollbar-auto-thumb",
    mapsToKey: "6436d02f21d749b84cbd8736bd453dad1c4ac3ab"
  },
  d509bf14b1c3aac55dc0fd6b822f628956ad80c3: {
    name: "themes/dark/other/scrollbar-auto-track",
    mapsToName: "themes/light/other/scrollbar-auto-track",
    mapsToKey: "54fb146609c07fba199d4066f8c2ce14829a0d0a"
  },
  // Effects
  b7edafef4513a59a40c8ba7adb382a0b6d3313ff: {
    name: "Border Elevation / Dark",
    mapsToName: "Border Elevation / Light",
    mapsToKey: "bf64ca51f902a903935680f692618a5eba4ea894"
  },
  "67aabb2beb8092e4c0094e0175657bb0758e6ba8": {
    name: "High Elevation / Dark",
    mapsToName: "High Elevation / Light",
    mapsToKey: "30f011bbe03506a59052d7f8435cc1ec3b743b19"
  },
  // Deprecated
  d104f004f79d0e422c44d14efdd5e527d57a185f: {
    name: "BETA_DEPRECATED/header/header-primary",
    mapsToName: "themes/light/header/header-primary",
    mapsToKey: "b19a14675b8adeb1528ab5f84e57b2eeed10d46c"
  },
  "1aee47626b0083fe2830fb8262d9ba2d1790949f": {
    name: "BETA_DEPRECATED/header/header-secondary",
    mapsToName: "themes/light/header/header-secondary",
    mapsToKey: "608f2ea1aa64ff7f202e8c22cc4147a02be9d85b"
  },
  bd768f7dda36913ff061b1f82a273264e710e9e0: {
    name: "BETA_DEPRECATED/background/background-primary",
    mapsToName: "themes/light/background/background-primary",
    mapsToKey: "2449a2983d43793d80baa20c6c60e8a48e7f3a0c"
  },
  e8c94a8857a45794172b8e7e1f4392b388403cfd: {
    name: "BETA_DEPRECATED/background/background-secondary",
    mapsToName: "themes/light/background/background-secondary",
    mapsToKey: "83704278c845a6a7ceb1f837387972ccb6d41960"
  },
  "8ed7c2cbc95b1ef5dbd750e29446fb30f5e2c7d6": {
    name: "themes/light/text/text-normal",
    mapsToName: "themes/light/background/background-primary",
    mapsToKey: "546c7d46e754ac2b23b338783d72f206b77b6436"
  },
  "7a18a8af03b002b7433560a024d0416017a927bd": {
    name: "BETA_DEPRECATED/text/text-muted",
    mapsToName: "themes/light/text/text-muted",
    mapsToKey: "7d8703ec132ddaf6968f6d190d1e80031c559d7c"
  }
};

export { darkTheme };
