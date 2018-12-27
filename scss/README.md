<a href="https://photon-platform.net/">
    <img src="https://photon-platform.net/images/photon-logo-bg.png" alt="photon" title="photon" align="right" height="120" />
</a>







# photon ✴ THEME: styles

styles are highly aligned with templates

plugins have their own source files

- default styling for all fundamental elements
- page level sections
- section componenents
- articles

**TOC**
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->
<!-- code_chunk_output -->

* [SCSS](#scss)
	* [master doc `photon.scss`](#master-doc-photonscss)
* [Generating SCSS](#generating-scss)
* [Aligning Templates and Styles at each level](#aligning-templates-and-styles-at-each-level)

<!-- /code_chunk_output -->

## SCSS

component based styling

### master doc `photon.scss`
imports smaller compoenents


## Generating SCSS

photon projects can use the `swatch` alias to call `scss --watch` on all the scss source files

`.photon` source file in the `user` folder has an alias called `swatch` to


```
alias swatch="scss --watch -t compact  \
  $THEMES_DIR/photon/scss:$THEMES_DIR/photon/css \
  $THEMES_DIR/photon-child/scss:$THEMES_DIR/photon-child/css \
  $PLUGINS_DIR/photon-event/scss:$PLUGINS_DIR/photon-event/assets \
  $PLUGINS_DIR/photon-organization/scss:$PLUGINS_DIR/photon-organization/assets \
  $PLUGINS_DIR/photon-person/scss:$PLUGINS_DIR/photon-person/assets \
  $PLUGINS_DIR/photon-project/scss:$PLUGINS_DIR/photon-project/assets \
  $PLUGINS_DIR/photon-search/scss:$PLUGINS_DIR/photon-search/assets \
  "

```


## Aligning Templates and Styles at each level

-
