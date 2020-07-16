---
title: ${title}
subtitle: ${subtitle}
author: ${author:-/about}
collection:
    name: ${collection_name:-Articles}
    showCount: true
    showMenu: true
content:
    items: '@self.children'
taxonomy:
    category: [ ${categories} ]
    tag: [ ${tags} ]
show_gallery: true
---

${summary}

===


