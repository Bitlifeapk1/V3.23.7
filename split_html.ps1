$sourceFile = "c:\Users\786\Desktop\Cava menu\index.html"
$themeDir = "c:\Users\786\Desktop\Cava menu\cava-menu-guide"

$content = Get-Content $sourceFile -Raw -Encoding UTF8

# Replace img/ paths with WP paths
$content = $content -replace 'src="img/([^"]+)"', 'src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/$1"'

$heroStart = $content.IndexOf('<section class="hero">')
$headerContent = $content.Substring(0, $heroStart)

$footerStart = $content.IndexOf('<footer class="footer">')
$frontPageContent = $content.Substring($heroStart, $footerStart - $heroStart)
$footerContent = $content.Substring($footerStart)

# Process header.php
$headStart = $headerContent.IndexOf('<head>') + 6
$headEnd = $headerContent.IndexOf('</head>')

$newHead = @"

  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title><?php wp_title('|', true, 'right'); ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <?php wp_head(); ?>

"@

$headerPhp = $headerContent.Substring(0, $headStart) + $newHead + $headerContent.Substring($headEnd)
$headerPhp = $headerPhp -replace '<body[^>]*>', '<body <?php body_class(); ?>>'

# Process front-page.php
$frontPagePhp = @"
<?php
/**
 * The front page template file
 *
 * @package cava-menu-guide
 */

get_header(); ?>
$frontPageContent
<?php
get_footer();
"@

# Process footer.php
$footerPhp = $footerContent -replace '<script src="js/data.js"></script>', ''
$footerPhp = $footerPhp -replace '<script src="js/app.js"></script>', ''
$bodyEnd = $footerPhp.IndexOf('</body>')
$footerPhp = $footerPhp.Substring(0, $bodyEnd) + "<?php wp_footer(); ?>`n" + $footerPhp.Substring($bodyEnd)

Set-Content -Path "$themeDir\header.php" -Value $headerPhp -Encoding UTF8
Set-Content -Path "$themeDir\front-page.php" -Value $frontPagePhp -Encoding UTF8
Set-Content -Path "$themeDir\footer.php" -Value $footerPhp -Encoding UTF8

Write-Host "Split successful."
