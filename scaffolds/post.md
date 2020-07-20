% name: Post
% folder: date
% def: author='/about'
% def: post_date=$(date +%Y-%m-%d)
% def: collection_name='Articles'
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
taxonomy:
    category: [ ${categories} ]
    tag: [ ${tags} ]
show_gallery: true
date: ${post_date}
---

${summary}

===


