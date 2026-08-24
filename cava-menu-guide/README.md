# CAVA Menu Guide - WordPress Theme

A custom Kadence child theme for the CAVA Menu Guide, preserving the interactive Single Page Application (SPA) experience while functioning natively within WordPress.

## 1. Requirements
- Parent Theme: Kadence (must be installed and active or present in your themes directory).

## 2. Installation
1. Go to **Appearance > Themes** in your WordPress admin dashboard.
2. Click **Add New** -> **Upload Theme**.
3. Upload the `cava-menu-guide-kadence-child.zip` file.
4. Click **Install Now** and then **Activate**.

## 3. How It Works
- **Menu Data**: The interactive data for all menu items, categories, calories, and prices is stored in `assets/js/data.js`. This is passed directly into the frontend.
- **JavaScript App**: The interactive logic (filtering, searching, Build Your Own, Quick View Modal) is located in `assets/js/app.js`.
- **CSS**: The styling is entirely managed via `assets/css/cava.css`.
- **Images**: All visual assets are stored in `assets/img/`.

## 4. Customization
- **Colors**: To change the primary red price color or background colors, edit the CSS variables found at the top of `assets/css/cava.css`.
- **Logo/Navigation**: The layout relies on hardcoded structure in `header.php`. Modify `header.php` if you wish to adjust the logo or add new navigation items.
- **Updating Data**: To update prices or add new bowls, simply edit the JSON objects located inside `assets/js/data.js`. The frontend will automatically reflect these changes.

## 5. Known Limitations
- The site operates primarily as a Single Page Application loaded on the Front Page. Sub-pages are not generated for individual menu items.
- Standard WordPress widgets are not natively embedded into the custom layout of this theme.

Enjoy the CAVA Menu Guide!
