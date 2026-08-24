import os

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

head = ''.join(lines[:140])
foot = ''.join(lines[1291:])

with open('cava-bowl-menu-post.html', 'r', encoding='utf-8') as f:
    post_content = f.read()

new_html = head + '\n<main class="site-main"><div class="container editorial-section" style="padding: 3rem 0; max-width: 900px; margin: 0 auto;">\n' + '<header class="section-header" style="text-align: left; margin-bottom: 2rem;"><span class="section-tag">Menu Guide</span><h1 class="section-title" style="font-size: 2.5rem; margin-top: 1rem;">CAVA Bowl Menu 2026: Prices, Calories, Nutrition & Signature Bowls</h1></header>\n' + '<div class="editorial-content-grid" style="display: block;"><div class="editorial-main-text">\n' + post_content + '\n</div></div></div></main>\n' + foot

with open('cava-bowl-menu.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Created cava-bowl-menu.html")
