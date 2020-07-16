---
title: ${title}
subtitle: ${subtitle}
author: ${author:-/about}
collection:
    name: ${collection_name:-Articles}
    showCount: true
    showMenu: true
content:
    items: '@root.descendants'
taxonomy:
    category: [ ${categories} ]
    tag: [ ${tags} ]
show_gallery: false
menu: Home
---

${summary}

===


