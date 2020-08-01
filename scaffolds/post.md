% name: Post
% folder: date
% def: post_date=$(date +%Y-%m-%d)
% def: author='/about'
% def: collection_name='Attachments'
---
title: ${title}
subtitle: ${subtitle}
date: ${post_date}
author: ${author}
sets:
    default:
        name: ${collection_name}
        showCount: true
        showMenu: true
content:
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

