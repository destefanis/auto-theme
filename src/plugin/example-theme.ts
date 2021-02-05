// Themes are objects.
// Using the "Inspector" plugin we've made pubic makes this process easier!

const sampleTheme = {
  // Within the object, we check for a *style key*,
  // Figma uses this key to refer to a specific style in your library
  "5c1691cbeaaf4270107d34f1a12f02fdd04afa02": {
    // Name isn't used, but is nice for reference.
    name: "Dark / Header / Primary (White)",
    // Within the object we check for the mapsToKey key value.
    // This is the style we'll swap the original style with.
    mapsToKey: "b19a14675b8adeb1528ab5f84e57b2eeed10d46c",
    mapsToName: "Light / Header / Primary (900)"
  },
  style_key_goes_here: {
    name: "",
    mapsToKey: "style_key_to_switch_with_goes_here",
    mapsToName: ""
  },
  // If you have two instances of a component in your library
  // ex: (Header/Dark and Header/Light) you can swap those instances
  // rather than simply retheming them. By adding a component key to your theme.
  f0d5aa5e63fff4392e3b3c22884523369f5d0424: {
    componentName: "iPhone X Status Bar / Dark",
    mapsToComponentName: "iPhone X Status Bar / Light",
    // This is key of the component I want to switch with.
    mapsToKey: "33425bd93c1b8cea071df9b5297f0b19583a643b"
  },
  component_key_goes_here: {
    name: "",
    mapsToKey: "component_key_to_switch_with_goes_here",
    mapsToName: ""
  }
};

// Don't know how to find a styles key? Use our inspector plugin
// https://www.figma.com/community/plugin/760351147138040099

export { sampleTheme };
