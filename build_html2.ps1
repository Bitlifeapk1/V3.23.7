$new_post = Get-Content cava-bowl-menu-post.html -Raw
$head = (Get-Content index.html | Select-Object -First 140) -join "`n"
$foot = (Get-Content index.html | Select-Object -Skip 1291) -join "`n"

$full = $head + "`n<main class='site-main'><div class='container editorial-section' style='padding: 4rem 0; max-width: 1000px; margin: 0 auto;'><header class='section-header' style='text-align: center; margin-bottom: 4rem;'><span class='section-tag' style='background: var(--primary-light); color: var(--primary); padding: 0.5rem 1.5rem; border-radius: 50px; font-weight: 700; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase;'>Menu Guide</span><h1 class='section-title' style='font-size: 3.5rem; margin-top: 1.5rem; font-family: var(--font-serif); color: var(--secondary); line-height: 1.2;'>CAVA Bowl Menu 2026:<br>Prices, Calories & Nutrition</h1></header><div class='editorial-main-text'>`n" + $new_post + "`n</div></div></main>`n" + $foot

Set-Content cava-bowl-menu.html $full -Encoding UTF8
