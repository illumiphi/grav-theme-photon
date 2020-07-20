% name: Article
% def: author="/about"
% def: collection_name="Articles"
---
title: ${title}
subtitle: ${subtitle}
author: ${author}
collection:
    name: ${collection_name}
    showCount: true
    showMenu: true
content:
    items: '@self.children'
child_type: article
taxonomy:
    category: [ ${categories} ]
    tag: [ ${tags} ]
show_gallery: true
---

${summary}

===


