const fs = require('fs');
const path = require('path');

const sourceFile = "index.html";
const themeDir = "cava-menu-guide";

let content = fs.readFileSync(sourceFile, 'utf-8');

// Replace img/ paths with WP paths
content = content.replace(/src="img\/([^"]+)"/g, 'src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/$1"');

const heroStart = content.indexOf('<section class="hero">');
let headerContent = content.substring(0, heroStart);

const footerStart = content.indexOf('<footer class="footer">');
let frontPageContent = content.substring(heroStart, footerStart);
let footerContent = content.substring(footerStart);

// Process header.php
let headStart = headerContent.indexOf('<head>') + '<head>'.length;
let headEnd = headerContent.indexOf('</head>');

let newHead = `
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title><?php wp_title('|', true, 'right'); ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
`;

let headerPhp = headerContent.substring(0, headStart) + newHead + headerContent.substring(headEnd);
headerPhp = headerPhp.replace(/<body[^>]*>/, '<body <?php body_class(); ?>>');

// Process front-page.php
let frontPagePhp = `<?php
/**
 * The front page template file
 *
 * @package cava-menu-guide
 */

get_header(); ?>
` + frontPageContent + `
<?php
get_footer();
`;

// Process footer.php
let footerPhp = footerContent.replace(/<script src="js\/data\.js"><\/script>/, '');
footerPhp = footerPhp.replace(/<script src="js\/app\.js"><\/script>/, '');
let bodyEnd = footerPhp.indexOf('</body>');
footerPhp = footerPhp.substring(0, bodyEnd) + '<?php wp_footer(); ?>\n' + footerPhp.substring(bodyEnd);

fs.writeFileSync(path.join(themeDir, 'header.php'), headerPhp, 'utf-8');
fs.writeFileSync(path.join(themeDir, 'front-page.php'), frontPagePhp, 'utf-8');
fs.writeFileSync(path.join(themeDir, 'footer.php'), footerPhp, 'utf-8');

console.log("Split successful.");
