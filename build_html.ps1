$head = (Get-Content -Path index.html | Select-Object -First 140) -join "`n"
$foot = (Get-Content -Path index.html | Select-Object -Skip 1291) -join "`n"
$post = (Get-Content -Path cava-bowl-menu-post.html) -join "`n"
$html = $head + "`n<main class='site-main'><div class='container editorial-section' style='padding: 3rem 0; max-width: 900px; margin: 0 auto;'><header class='section-header' style='text-align: left; margin-bottom: 2rem;'><span class='section-tag'>Menu Guide</span><h1 class='section-title' style='font-size: 2.5rem; margin-top: 1rem;'>CAVA Bowl Menu 2026: Prices, Calories, Nutrition & Signature Bowls</h1></header><div class='editorial-content-grid' style='display: block;'><div class='editorial-main-text'>`n" + $post + "`n</div></div></div></main>`n" + $foot
Set-Content -Path cava-bowl-menu.html -Value $html -Encoding UTF8
