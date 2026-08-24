const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8').split('\n');
const head = indexHtml.slice(0, 140).join('\n');
const foot = indexHtml.slice(1291).join('\n');
const post = fs.readFileSync('cava-bowl-menu-post.html', 'utf8');

const html = head + '\n<main class="site-main"><div class="container editorial-section" style="padding: 3rem 0; max-width: 900px; margin: 0 auto;">\n' + 
'<header class="section-header" style="text-align: left; margin-bottom: 2rem;"><span class="section-tag">Menu Guide</span><h1 class="section-title" style="font-size: 2.5rem; margin-top: 1rem;">CAVA Bowl Menu 2026: Prices, Calories, Nutrition & Signature Bowls</h1></header>\n' + 
'<div class="editorial-content-grid" style="display: block;"><div class="editorial-main-text">\n' + 
post + '\n</div></div></div></main>\n' + foot;

fs.writeFileSync('cava-bowl-menu.html', html);
console.log('Created cava-bowl-menu.html');
