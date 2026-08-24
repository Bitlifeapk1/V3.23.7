<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title><?php wp_title('|', true, 'right'); ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <!-- ========================================================================
       Header Navigation
       ======================================================================== -->
  <header class="header">
    <!-- Top Bar -->
    <div class="top-bar" style="background: var(--bg-card); border-bottom: 1px solid var(--border-light); padding: 0.8rem 0; font-size: 0.8rem; font-weight: 500;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="social-icons" style="display: flex; gap: 0.8rem; align-items: center;">
          <a href="#" aria-label="Facebook" style="color: var(--text-muted); text-decoration: none; display: flex; align-items: center;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" style="color: var(--text-muted); text-decoration: none; display: flex; align-items: center;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" style="color: var(--text-muted); text-decoration: none; display: flex; align-items: center;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" style="color: var(--text-muted); text-decoration: none; display: flex; align-items: center;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" aria-label="Pinterest" style="color: var(--text-muted); text-decoration: none; display: flex; align-items: center;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
          </a>
        </div>
        <div class="top-links" style="display: flex; gap: 1.2rem; align-items: center;">
          <a href="#about-cava" style="color: var(--text-muted); text-decoration: none;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">About Us</a>
          <a href="#contact-us" style="color: var(--text-muted); text-decoration: none;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">Contact Us</a>
          <a href="#privacy-policy" style="color: var(--text-muted); text-decoration: none;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">Privacy Policy</a>
          <a href="#disclaimer" style="color: var(--text-muted); text-decoration: none;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-muted)'">Disclaimer</a>
        </div>
      </div>
    </div>
    <div class="container header-content" style="display: flex; align-items: center; justify-content: space-between; height: 4.2rem;">
      <div class="brand-logo" id="brandLogoBtn" title="CAVA Menu Guide" style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="brand-icon" style="width: 40px; height: 40px; border-radius: 50%; transform: none; box-shadow: 0 4px 12px var(--primary-glow); border: 2px solid white; font-size: 1.3rem;">🥗</div>
        <div class="brand-text" style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1;">
          <span class="brand-title" style="font-size: 1.5rem; font-weight: 900; letter-spacing: -0.5px;">CAVA</span>
          <span class="brand-subtitle" style="font-size: 0.7rem; color: var(--primary); font-weight: 700; margin-top: 2px;">MENU</span>
        </div>
      </div>

      <!-- Main Desktop Navigation -->
      <nav class="main-nav" aria-label="Main Navigation" style="display: flex; gap: 0.75rem; align-items: center; white-space: nowrap; margin-top: 0.4rem;">
        <a href="#" class="toc-pill">Home</a>
        <a href="#menu-prices" class="toc-pill" onclick="window.cavaAppInstance?.filterByCategory('bowls')">CAVA Bowl</a>
        <a href="#menu-prices" class="toc-pill" onclick="window.cavaAppInstance?.filterByCategory('pitas')">CAVA Pita</a>
        <a href="#menu-prices" class="toc-pill" onclick="window.cavaAppInstance?.filterByCategory('drinks')">CAVA Drink</a>
        <a href="#menu-prices" class="toc-pill" onclick="window.cavaAppInstance?.filterByCategory('kids-meal')">Kids Menu</a>
        <a href="#menu-prices" class="toc-pill" onclick="window.cavaAppInstance?.filterByCategory('sides')">CAVA Sides</a>
        <a href="#cava-sauces" class="toc-pill">Sauces & Dressings</a>
        <a href="#about-cava" class="toc-pill">About Us</a>
        <a href="#contact-us" class="toc-pill">Contact Us</a>
      </nav>

      <!-- Hamburger Menu Button -->
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open mobile menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Drawer -->
  <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
  <div class="mobile-menu-drawer" id="mobileMenuDrawer">
    <div class="mobile-menu-header">
      <span style="font-weight: 800; font-size: 1.2rem; color: var(--primary);">CAVA MENU</span>
      <button class="mobile-menu-close" id="mobileMenuCloseBtn" aria-label="Close mobile menu">✕</button>
    </div>
    <div class="mobile-menu-links">
      <a href="#" onclick="window.cavaAppInstance?.closeMobileMenu()">Home</a>
      <a href="#menu-prices" onclick="window.cavaAppInstance?.filterByCategory('bowls'); window.cavaAppInstance?.closeMobileMenu()">CAVA Bowl</a>
      <a href="#menu-prices" onclick="window.cavaAppInstance?.filterByCategory('pitas'); window.cavaAppInstance?.closeMobileMenu()">CAVA Pita</a>
      <a href="#menu-prices" onclick="window.cavaAppInstance?.filterByCategory('drinks'); window.cavaAppInstance?.closeMobileMenu()">CAVA Drink</a>
      <a href="#menu-prices" onclick="window.cavaAppInstance?.filterByCategory('kids-meal'); window.cavaAppInstance?.closeMobileMenu()">Kids Menu</a>
      <a href="#menu-prices" onclick="window.cavaAppInstance?.filterByCategory('sides'); window.cavaAppInstance?.closeMobileMenu()">CAVA Sides</a>
      <a href="#cava-sauces" onclick="window.cavaAppInstance?.closeMobileMenu()">Sauces & Dressings</a>
      <a href="#about-cava" onclick="window.cavaAppInstance?.closeMobileMenu()">About Us</a>
      <a href="#contact-us" onclick="window.cavaAppInstance?.closeMobileMenu()">Contact Us</a>
    </div>
  </div>

  <!-- ========================================================================
       Hero Section
       ======================================================================== -->
  
