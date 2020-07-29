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
    category: 
        - ${category}
    tag: 
        - ${tag}
show_gallery: true
---

${summary}

===


