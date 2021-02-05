# Auto Theme

![alt text](https://github.com/destefanis/auto-theme/blob/master/assets/Auto%20Theme%20Art.png?raw=true "Auto Theme Cover Art")

A figma plugin for automatically theming your designs from one color mapping to another. This was built specifically for use by the Discord design team.

## How to run locally
* Run `yarn` to install dependencies.
* Run `yarn build:watch` to start webpack in watch mode.

⭐ To change the UI of your plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx).  
⭐ To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## How to use this plugin with your team
* Follow the instructions for running locally
* Set up your own themes, see the examples below in the Theme Object section.
* In Figma, create a plugin and select this Auto Theme plugin manifest file.
* Upload the plugin images from the asset directory, then hit publish internally.

## How it works
* When a frame or multiple frames are selected the code loops through each layer.
* During the loop, the layer checks to see what "type" the layer is (text, vector, rectangle etc). This allows us to skip certain nodes and handle mappings different for text and shapes.
* If the layer has a fill, it fetches that nodes Style ID using `figma.getStyleById`.
* It then imports that style from our main library using `figma.importStyleByKeyAsync`
* Once we have that styles `key` then we check to see if it has a match in one of our theme objects, if it has a match we update that node with a new color.

![alt text](https://github.com/destefanis/auto-theme/blob/master/assets/auto-theme-example.gif?raw=true "Auto Theme Gif Example")

## Theme Object

Themes are objects with key value pairs to handle how we map each color to another corresponding color. [See example theme](https://github.com/destefanis/auto-theme/blob/master/src/plugin/example-theme.ts).

```
'4b93d40f61be15e255e87948a715521c3ae957e6': {
  name: "Dark / Header / Primary (White)",
  mapsToName: "Light / Header / Primary (900)",
  mapsToKey: '3eddc15e90bbd7064aea7cc13dc13e23a712f0b0',
},
```
  
The first string of numbers is our `style.key` which in our design system is called "Dark / Header / Primary (White)". This color in light theme is "Light / Header / Primary (900)", so we replace our first key with the `mapsToKey` string. Swapping one style key for another.

```
"style_key_goes_here": {
  name: "",
  mapsToKey: "style_key_to_switch_with_goes_here",
  mapsToName: "",
},
```

This does mean you'll need to know the `keys` of each of your styles.

### How do I find my style keys?
I built [Inspector Plugin](https://www.figma.com/community/plugin/760351147138040099) for this very reason.

### Instance Switching

Some of your designs may use components like the status bar on iOS. In order to solve for this, the plugin allows you to swap instances of components.

```
  "component_key_goes_here": {
    name: "",
    mapsToKey: "component_key_to_switch_with_goes_here",
    mapsToName: "",
  },
```

This way if you'd like to switch `iPhone X Status Bar / Dark` with `iPhone X Status Bar / Light` rather than try and theme them, you can. Only instances will check to see if it's parent component is listed in the themes you've declared, otherwise it will be treated normally.

### Can I use multiple themes?
Yes, create a new theme and import it, then hook up a button in the UI to send a message to the [controller.ts](https://github.com/destefanis/auto-theme/blob/master/src/plugin/controller.ts#L60) to
call that theme. There are two examples of this in the code already.

## Toolings
This repo is using:
* React + Webpack
* TypeScript
* TSLint
* Prettier precommit hook
