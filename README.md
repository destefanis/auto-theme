# figma-auto-theme

A figma plugin for automatically theming your designs from one color mapping to another. This was built specifically for use by the Discord
design team. I found the other theming Figma plugins slightly too opinionated to use for us internally.

## How it works
* When a frame or multiple frames are selected the code loops through each layer.
* During the loop, the layer checks to see what "type" the layer is (text, vector, rectangle etc). This allows us to skip certain nodes and handle mappings different for text and shapes.
* If the layer has a fill or background, it fetches that nodes Style ID using `figma.getStyleById`.
* It then imports that style from our main library using `figma.importStyleByKeyAsync`
* Once we have that styles `key` then we match it to the styles object, and update that node with a new color.

## Mapping Object

This could be cleaner but I've simply created a large object with key value pairs to handle how we map each color.

`'4b93d40f61be15e255e87948a715521c3ae957e6': {
    name: 'Primary Dark / 600',
    mapsToName: 'White',
    mapsToKey: '3eddc15e90bbd7064aea7cc13dc13e23a712f0b0',
  },`
  
The first string of numbers is our `style.key` which in our design system is called Primary Dark / 600. This color in light theme is white,
so we replace our first key with the `mapsToKey` string. Essentially swapping one style key for another.

This does mean you'll need to know the `keys` of each of your styles and won't work with hex values out of the box (we only use styles so we don't use colors not within our design system).

## On the roadmap

* Right now the Figma plugin API does not have scope of team libraries meaning if you have 'instances' of a component, we can't swap between them nicely.
This is something I'd like to add going forward.
* I'd like to clean up the code and move the mappings object to another file for organization.
* Remove the inside joke of our developer with goggles

Send a DM if you have any questions!

