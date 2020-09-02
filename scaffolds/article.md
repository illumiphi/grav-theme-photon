% name: Article
% def: post_date=$(date +%m/%d/%Y)
% def: author="/about"
% def: collection_name="Articles"
---
title: ${title}
subtitle: ${subtitle}
date: ${post_date}
author: ${author}
content:
    title: ${collection_name}
    showCount: true
    showMenu: true
    items: '@self.children'
taxonomy:
    category: 
        - ${category}
    tag: 
        - ${tag}
show_gallery: true
---

${summary}

===


