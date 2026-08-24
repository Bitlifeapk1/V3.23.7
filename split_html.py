import re
import os

source_file = "index.html"
theme_dir = r"cava-menu-guide"

with open(source_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace img/ paths with WP paths
# We use php echo get_stylesheet_directory_uri() for images
content = re.sub(r'src="img/([^"]+)"', r'src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/\1"', content)

# Find header end
header_end = content.find('</header>') + len('</header>')

# But wait, Mobile Menu Drawer is right after header and before hero.
# Let's include mobile menu drawer in header.php
hero_start = content.find('<section class="hero">')
header_content = content[:hero_start]

# Find footer start
footer_start = content.find('<footer class="footer">')

front_page_content = content[hero_start:footer_start]
footer_content = content[footer_start:]

# Fix header.php for WP
header_php = header_content
# Replace <head> inner content to be WP friendly
head_start = header_php.find('<head>') + len('<head>')
head_end = header_php.find('</head>')

new_head = """
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title><?php wp_title('|', true, 'right'); ?></title>
  <!-- Preconnect and fonts should remain -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
"""

header_php = header_php[:head_start] + new_head + header_php[head_end:]
# Ensure body_class() is used
header_php = re.sub(r'<body[^>]*>', r'<body <?php body_class(); ?>>', header_php)


# Fix front-page.php
front_page_php = """<?php
/**
 * The front page template file
 *
 * @package cava-menu-guide
 */

get_header(); ?>
""" + front_page_content + """
<?php
get_footer();
"""

# Fix footer.php
# Add wp_footer() before </body>
# Remove script tags that load app.js and data.js (WP handles this)
footer_php = footer_content
footer_php = re.sub(r'<script src="js/data.js"></script>', '', footer_php)
footer_php = re.sub(r'<script src="js/app.js"></script>', '', footer_php)
body_end = footer_php.find('</body>')
footer_php = footer_php[:body_end] + '<?php wp_footer(); ?>\n' + footer_php[body_end:]

with open(os.path.join(theme_dir, 'header.php'), 'w', encoding='utf-8') as f:
    f.write(header_php)

with open(os.path.join(theme_dir, 'front-page.php'), 'w', encoding='utf-8') as f:
    f.write(front_page_php)

with open(os.path.join(theme_dir, 'footer.php'), 'w', encoding='utf-8') as f:
    f.write(footer_php)

print("Split successful.")
