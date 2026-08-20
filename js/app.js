// ==========================================================================
// CAVA Mediterranean Menu - Main Application Logic & Interactivity
// ==========================================================================

import { MENU_DATA } from './data.js';

class CavaApp {
  constructor() {
    this.state = {
      cart: JSON.parse(localStorage.getItem('cava_cart') || '[]'),
      favorites: new Set(JSON.parse(localStorage.getItem('cava_favs') || '[]')),
      activeCategory: 'all',
      searchQuery: '',
      activeDietFilters: new Set(),
      currentBuilderStep: 1,
      customBowl: {
        bases: [],
        dips: [],
        protein: [],
        toppings: [],
        dressings: []
      },
      selectedLocation: MENU_DATA.locations[0],
      appliedPromo: null,
      fulfillmentType: 'pickup',
      theme: localStorage.getItem('cava_theme') || 'light'
    };

    this.init();
  }

  init() {
    this.applyTheme(this.state.theme);
    this.setupEventListeners();
    this.renderCategoryTabs();
    this.renderMenuItems();
    this.renderBuilderStepNav();
    this.renderBuilderStep();
    this.updateBuilderSummary();
    this.renderCart();
    this.updateHeaderBadge();
    this.renderLocationsList();
  }

  // ========================================================================
  // Theme Toggle
  // ========================================================================
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.textContent = theme === 'dark' ? '☀️' : '🌓';
    }
    localStorage.setItem('cava_theme', theme);
  }

  toggleTheme() {
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.state.theme = nextTheme;
    this.applyTheme(nextTheme);
    this.showToast(`Switched to ${nextTheme === 'dark' ? 'Dark Mode' : 'Warm Light Mode'}`);
  }

  // ========================================================================
  // Event Listeners Setup
  // ========================================================================
  setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => this.toggleTheme());

    // Brand logo scroll to top
    document.getElementById('brandLogoBtn')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Search Input
    const searchInput = document.getElementById('menuSearchInput');
    searchInput?.addEventListener('input', (e) => {
      this.state.searchQuery = e.target.value.toLowerCase().trim();
      this.renderMenuItems();
    });

    // Dietary Filter Chips
    const dietContainer = document.getElementById('dietaryFilters');
    dietContainer?.addEventListener('click', (e) => {
      const chip = e.target.closest('.dietary-tag-chip');
      if (!chip) return;
      const diet = chip.dataset.diet;
      if (this.state.activeDietFilters.has(diet)) {
        this.state.activeDietFilters.delete(diet);
        chip.classList.remove('active');
      } else {
        this.state.activeDietFilters.add(diet);
        chip.classList.add('active');
      }
      this.renderMenuItems();
    });

    // Builder Step Navigation Buttons
    document.getElementById('btnNextStep')?.addEventListener('click', () => {
      if (this.state.currentBuilderStep < MENU_DATA.builder.steps.length) {
        this.setBuilderStep(this.state.currentBuilderStep + 1);
      }
    });

    document.getElementById('btnPrevStep')?.addEventListener('click', () => {
      if (this.state.currentBuilderStep > 1) {
        this.setBuilderStep(this.state.currentBuilderStep - 1);
      }
    });

    // Add Custom Bowl to Bag
    document.getElementById('btnAddCustomBowlToBag')?.addEventListener('click', () => {
      this.addCustomBowlToCart();
    });

    // Cart Drawer Open / Close
    const openCartBtn = document.getElementById('openCartDrawerBtn');
    const closeCartBtn = document.getElementById('closeCartDrawerBtn');
    const cartBackdrop = document.getElementById('cartDrawerBackdrop');

    openCartBtn?.addEventListener('click', () => this.openCartDrawer());
    closeCartBtn?.addEventListener('click', () => this.closeCartDrawer());
    cartBackdrop?.addEventListener('click', () => this.closeCartDrawer());

    // Fulfillment toggle inside Cart
    const fulfillmentBtns = document.querySelectorAll('.fulfillment-btn');
    fulfillmentBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fulfillmentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.fulfillmentType = btn.dataset.type;
        this.showToast(`Order set to ${btn.textContent.trim()}`);
      });
    });

    // Promo Code Application
    document.getElementById('btnApplyPromo')?.addEventListener('click', () => {
      this.applyPromoCode();
    });

    // Proceed to Checkout
    document.getElementById('btnProceedCheckout')?.addEventListener('click', () => {
      this.handleCheckout();
    });

    // Modals Close Buttons
    document.getElementById('closeQuickViewBtn')?.addEventListener('click', () => this.closeModal('quickViewModal'));
    document.getElementById('quickViewModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'quickViewModal') this.closeModal('quickViewModal');
    });

    document.getElementById('closeCheckoutModalBtn')?.addEventListener('click', () => this.closeModal('checkoutModal'));
    document.getElementById('btnReceiptDone')?.addEventListener('click', () => this.closeModal('checkoutModal'));
    document.getElementById('checkoutModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'checkoutModal') this.closeModal('checkoutModal');
    });

    // Location Modal
    document.getElementById('openLocationModalBtn')?.addEventListener('click', () => this.openModal('locationModal'));
    document.getElementById('closeLocationModalBtn')?.addEventListener('click', () => this.closeModal('locationModal'));
    document.getElementById('locationModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'locationModal') this.closeModal('locationModal');
    });

    // Escape Key to Close Modals / Drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCartDrawer();
        this.closeModal('quickViewModal');
        this.closeModal('checkoutModal');
        this.closeModal('locationModal');
      }
    });
  }

  // ========================================================================
  // Menu Explorer & Filtering
  // ========================================================================
  renderCategoryTabs() {
    const container = document.getElementById('categoryTabs');
    if (!container) return;

    container.innerHTML = MENU_DATA.categories.map(cat => `
      <button class="category-pill ${cat.id === this.state.activeCategory ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `).join('');

    container.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.state.activeCategory = pill.dataset.cat;
        container.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.renderMenuItems();
      });
    });
  }

  renderMenuItems() {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    let filtered = MENU_DATA.items.filter(item => {
      // Category filter
      if (this.state.activeCategory !== 'all' && item.category !== this.state.activeCategory) {
        return false;
      }

      // Search query filter
      if (this.state.searchQuery) {
        const query = this.state.searchQuery;
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        const ingMatch = item.ingredients.some(ing => ing.toLowerCase().includes(query));
        if (!nameMatch && !descMatch && !ingMatch) return false;
      }

      // Dietary tag filters
      if (this.state.activeDietFilters.size > 0) {
        for (const diet of this.state.activeDietFilters) {
          if (diet === 'favorites') {
            if (!this.state.favorites.has(item.id)) return false;
          } else {
            if (!item.dietary || !item.dietary.includes(diet)) return false;
          }
        }
      }

      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-menu-state">
          <div class="empty-icon">🥗</div>
          <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem;">No Dishes Found</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Try adjusting your search or clearing active dietary filters.</p>
          <button class="btn-secondary" style="margin-top: 1.25rem;" id="btnClearFiltersBtn">Reset Filters</button>
        </div>
      `;
      document.getElementById('btnClearFiltersBtn')?.addEventListener('click', () => {
        this.state.searchQuery = '';
        this.state.activeCategory = 'all';
        this.state.activeDietFilters.clear();
        const searchInput = document.getElementById('menuSearchInput');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.dietary-tag-chip').forEach(c => c.classList.remove('active'));
        this.renderCategoryTabs();
        this.renderMenuItems();
      });
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const isFav = this.state.favorites.has(item.id);
      return `
        <article class="menu-card" data-id="${item.id}">
          <div class="card-image-wrap">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
            <button class="favorite-btn ${isFav ? 'active' : ''}" data-fav-id="${item.id}" title="Add to Favorites" aria-label="Favorite ${item.name}">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>

          <div class="card-content">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-description">${item.description}</p>
            
            <div class="card-meta">
              <span>🔥 ${item.calories} cal</span>
              <span>💪 ${item.protein} protein</span>
            </div>

            <div class="card-footer">
              <span class="card-price">$${item.price.toFixed(2)}</span>
              <div class="card-btn-group">
                <button class="btn-card-quickview" data-quickview-id="${item.id}">Nutrition</button>
                <button class="btn-card-add" data-add-id="${item.id}">
                  <span>+</span> Add
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card event listeners
    grid.querySelectorAll('.btn-card-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.addId;
        const item = MENU_DATA.items.find(i => i.id === id);
        if (item) this.addToCart(item);
      });
    });

    grid.querySelectorAll('.btn-card-quickview').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.quickviewId;
        const item = MENU_DATA.items.find(i => i.id === id);
        if (item) this.openQuickView(item);
      });
    });

    grid.querySelectorAll('.favorite-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.favId;
        this.toggleFavorite(id);
      });
    });
  }

  toggleFavorite(itemId) {
    if (this.state.favorites.has(itemId)) {
      this.state.favorites.delete(itemId);
      this.showToast('Removed from favorites');
    } else {
      this.state.favorites.add(itemId);
      this.showToast('Saved to your favorites! ❤️');
    }
    localStorage.setItem('cava_favs', JSON.stringify([...this.state.favorites]));
    this.renderMenuItems();
  }

  // ========================================================================
  // "Build Your Own Bowl" Interactive Studio
  // ========================================================================
  renderBuilderStepNav() {
    const nav = document.getElementById('builderStepsNav');
    if (!nav) return;

    nav.innerHTML = MENU_DATA.builder.steps.map(step => {
      const isCompleted = this.isStepCompleted(step.stepId);
      const isActive = this.state.currentBuilderStep === step.stepId;
      return `
        <button class="step-tab ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-step="${step.stepId}">
          <span class="step-number">${isCompleted && !isActive ? '✓' : step.stepId}</span>
          <span>${step.title.replace('Choose ', '').replace('Add ', '').replace('Select ', '')}</span>
        </button>
      `;
    }).join('');

    nav.querySelectorAll('.step-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const stepNum = parseInt(tab.dataset.step, 10);
        this.setBuilderStep(stepNum);
      });
    });
  }

  setBuilderStep(stepNumber) {
    this.state.currentBuilderStep = stepNumber;
    this.renderBuilderStepNav();
    this.renderBuilderStep();

    const prevBtn = document.getElementById('btnPrevStep');
    const nextBtn = document.getElementById('btnNextStep');
    const badge = document.getElementById('customBowlStepBadge');

    if (prevBtn) prevBtn.style.visibility = stepNumber === 1 ? 'hidden' : 'visible';
    if (nextBtn) {
      if (stepNumber === MENU_DATA.builder.steps.length) {
        nextBtn.textContent = 'Review Bowl & Finish';
      } else {
        nextBtn.textContent = 'Next Step →';
      }
    }
    if (badge) badge.textContent = `Step ${stepNumber} of ${MENU_DATA.builder.steps.length}`;
  }

  isStepCompleted(stepId) {
    const bowl = this.state.customBowl;
    switch (stepId) {
      case 1: return bowl.bases.length > 0;
      case 2: return bowl.dips.length > 0;
      case 3: return bowl.protein.length > 0;
      case 4: return bowl.toppings.length > 0;
      case 5: return bowl.dressings.length > 0;
      default: return false;
    }
  }

  getStepKey(stepId) {
    const keys = { 1: 'bases', 2: 'dips', 3: 'protein', 4: 'toppings', 5: 'dressings' };
    return keys[stepId];
  }

  renderBuilderStep() {
    const stepConfig = MENU_DATA.builder.steps.find(s => s.stepId === this.state.currentBuilderStep);
    if (!stepConfig) return;

    const titleEl = document.getElementById('currentStepTitle');
    const limitEl = document.getElementById('currentStepLimit');
    const grid = document.getElementById('builderOptionsGrid');

    if (titleEl) titleEl.textContent = `${stepConfig.title}`;
    if (limitEl) limitEl.textContent = stepConfig.subtitle;

    const currentKey = this.getStepKey(stepConfig.stepId);
    const selectedList = this.state.customBowl[currentKey] || [];

    grid.innerHTML = stepConfig.options.map(opt => {
      const isSelected = selectedList.some(item => item.id === opt.id);
      return `
        <div class="option-card ${isSelected ? 'selected' : ''}" data-opt-id="${opt.id}">
          <div class="option-top">
            <span class="option-icon">${opt.icon || '✨'}</span>
            <div class="option-check">${isSelected ? '✓' : ''}</div>
          </div>
          <div>
            <div class="option-name">${opt.name}</div>
            <div class="option-nutrition">
              <span>${opt.calories} cal</span> • <span>${opt.protein}g protein</span>
            </div>
            ${opt.allergen ? `<div style="font-size:0.72rem; color:#ef4444; font-weight:600;">Allergen: ${opt.allergen}</div>` : ''}
            ${opt.extraCost ? `<div class="option-extra-cost">+$${opt.extraCost.toFixed(2)}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        const optId = card.dataset.optId;
        const opt = stepConfig.options.find(o => o.id === optId);
        if (!opt) return;

        this.toggleBuilderOption(stepConfig, opt);
      });
    });
  }

  toggleBuilderOption(stepConfig, option) {
    const key = this.getStepKey(stepConfig.stepId);
    let selected = this.state.customBowl[key];
    const index = selected.findIndex(item => item.id === option.id);

    if (index > -1) {
      selected.splice(index, 1);
    } else {
      if (selected.length >= stepConfig.maxSelect) {
        if (stepConfig.maxSelect === 1) {
          // Replace single choice
          this.state.customBowl[key] = [option];
        } else {
          this.showToast(`Maximum ${stepConfig.maxSelect} selections for this step`);
          return;
        }
      } else {
        selected.push(option);
      }
    }

    this.renderBuilderStepNav();
    this.renderBuilderStep();
    this.updateBuilderSummary();
  }

  updateBuilderSummary() {
    const bowl = this.state.customBowl;
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalPrice = MENU_DATA.builder.basePrice;

    // Tally all chosen ingredients
    const allSelected = [
      ...bowl.bases,
      ...bowl.dips,
      ...bowl.protein,
      ...bowl.toppings,
      ...bowl.dressings
    ];

    allSelected.forEach(item => {
      totalCalories += item.calories || 0;
      totalProtein += item.protein || 0;
      totalCarbs += item.carbs || 0;
      totalFat += item.fat || 0;
      if (item.extraCost) totalPrice += item.extraCost;
    });

    // Update Macros UI
    const calEl = document.getElementById('builderTotalCal');
    const protEl = document.getElementById('builderTotalProtein');
    const carbEl = document.getElementById('builderTotalCarbs');
    const fatEl = document.getElementById('builderTotalFat');
    const priceEl = document.getElementById('builderTotalPrice');

    if (calEl) calEl.textContent = totalCalories;
    if (protEl) protEl.textContent = `${totalProtein}g`;
    if (carbEl) carbEl.textContent = `${totalCarbs}g`;
    if (fatEl) fatEl.textContent = `${totalFat}g`;
    if (priceEl) priceEl.textContent = `$${totalPrice.toFixed(2)}`;

    // Render Checklist
    const listEl = document.getElementById('builderSummaryList');
    if (listEl) {
      const sections = [
        { label: '1. Bases', items: bowl.bases },
        { label: '2. Dips & Spreads', items: bowl.dips },
        { label: '3. Protein', items: bowl.protein },
        { label: '4. Toppings', items: bowl.toppings },
        { label: '5. Dressings', items: bowl.dressings }
      ];

      listEl.innerHTML = sections.map(sec => `
        <div class="summary-step-group">
          <div class="summary-step-label">${sec.label}</div>
          <div class="summary-step-items">
            ${sec.items.length > 0 
              ? sec.items.map(i => `${i.name}${i.extraCost ? ` (+$${i.extraCost.toFixed(2)})` : ''}`).join(', ')
              : '<span style="color: var(--text-subtle); font-weight: normal; font-style: italic;">None selected yet</span>'}
          </div>
        </div>
      `).join('');
    }
  }

  addCustomBowlToCart() {
    const bowl = this.state.customBowl;
    if (bowl.bases.length === 0) {
      this.showToast('Please select at least 1 Base for your bowl!');
      this.setBuilderStep(1);
      return;
    }
    if (bowl.protein.length === 0) {
      this.showToast('Please select a Protein for your bowl!');
      this.setBuilderStep(3);
      return;
    }

    let totalPrice = MENU_DATA.builder.basePrice;
    let totalCalories = 0;
    const allSelected = [
      ...bowl.bases,
      ...bowl.dips,
      ...bowl.protein,
      ...bowl.toppings,
      ...bowl.dressings
    ];

    allSelected.forEach(item => {
      totalCalories += item.calories || 0;
      if (item.extraCost) totalPrice += item.extraCost;
    });

    const customItem = {
      id: `custom-bowl-${Date.now()}`,
      name: "Custom Mediterranean Bowl",
      price: totalPrice,
      calories: totalCalories,
      image: "images/hero_bowl.jpg",
      isCustom: true,
      customDetails: {
        bases: bowl.bases.map(b => b.name),
        dips: bowl.dips.map(d => d.name),
        protein: bowl.protein.map(p => p.name),
        toppings: bowl.toppings.map(t => t.name),
        dressings: bowl.dressings.map(d => d.name)
      },
      quantity: 1
    };

    this.state.cart.push(customItem);
    this.saveCart();
    this.showToast('🎉 Custom Bowl added to your bag!');
    this.openCartDrawer();

    // Reset Builder
    this.state.customBowl = { bases: [], dips: [], protein: [], toppings: [], dressings: [] };
    this.setBuilderStep(1);
    this.updateBuilderSummary();
  }

  // ========================================================================
  // Cart Management
  // ========================================================================
  addToCart(item) {
    const existingIndex = this.state.cart.findIndex(i => !i.isCustom && i.id === item.id);
    if (existingIndex > -1) {
      this.state.cart[existingIndex].quantity += 1;
    } else {
      this.state.cart.push({
        ...item,
        quantity: 1
      });
    }

    this.saveCart();
    this.showToast(`Added ${item.name} to Bag! 🛍️`);
    this.animateBagIcon();
  }

  saveCart() {
    localStorage.setItem('cava_cart', JSON.stringify(this.state.cart));
    this.renderCart();
    this.updateHeaderBadge();
  }

  updateHeaderBadge() {
    const totalCount = this.state.cart.reduce((acc, item) => acc + item.quantity, 0);
    const badge = document.getElementById('headerBagCount');
    if (badge) {
      badge.textContent = totalCount;
    }
  }

  animateBagIcon() {
    const badge = document.getElementById('headerBagCount');
    if (badge) {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 300);
    }
  }

  renderCart() {
    const list = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');
    const discountRow = document.getElementById('cartDiscountRow');
    const discountAmountEl = document.getElementById('cartDiscountAmount');
    const checkoutBtn = document.getElementById('btnProceedCheckout');

    if (!list) return;

    if (this.state.cart.length === 0) {
      list.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛍️</div>
          <h4 style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.25rem;">Your bag is empty</h4>
          <p style="font-size: 0.85rem;">Add some crave-worthy Mediterranean bowls & pitas to get started!</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (taxEl) taxEl.textContent = '$0.00';
      if (totalEl) totalEl.textContent = '$0.00';
      if (discountRow) discountRow.style.display = 'none';
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    let subtotal = 0;

    list.innerHTML = this.state.cart.map((item, index) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      let customDetailsHtml = '';
      if (item.isCustom && item.customDetails) {
        const c = item.customDetails;
        customDetailsHtml = `
          <div class="cart-item-customs">
            ${c.bases.length ? `<div><strong>Base:</strong> ${c.bases.join(', ')}</div>` : ''}
            ${c.protein.length ? `<div><strong>Protein:</strong> ${c.protein.join(', ')}</div>` : ''}
            ${c.dips.length ? `<div><strong>Dips:</strong> ${c.dips.join(', ')}</div>` : ''}
            ${c.toppings.length ? `<div><strong>Toppings:</strong> ${c.toppings.join(', ')}</div>` : ''}
            ${c.dressings.length ? `<div><strong>Dressing:</strong> ${c.dressings.join(', ')}</div>` : ''}
          </div>
        `;
      }

      return `
        <div class="cart-item" data-index="${index}">
          <div class="cart-item-top">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
          </div>
          ${customDetailsHtml}
          <div class="cart-item-actions">
            <div class="qty-stepper">
              <button class="qty-btn" data-action="dec" data-index="${index}">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" data-action="inc" data-index="${index}">+</button>
            </div>
            <button class="btn-remove-item" data-action="remove" data-index="${index}">Remove</button>
          </div>
        </div>
      `;
    }).join('');

    // Quantity events
    list.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        const index = parseInt(btn.dataset.index, 10);
        if (action === 'inc') {
          this.state.cart[index].quantity += 1;
        } else if (action === 'dec') {
          if (this.state.cart[index].quantity > 1) {
            this.state.cart[index].quantity -= 1;
          } else {
            this.state.cart.splice(index, 1);
          }
        }
        this.saveCart();
      });
    });

    list.querySelectorAll('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index, 10);
        this.state.cart.splice(index, 1);
        this.saveCart();
      });
    });

    // Calculate Discount & Taxes
    let discount = 0;
    if (this.state.appliedPromo) {
      if (this.state.appliedPromo.discountPercent) {
        discount = subtotal * (this.state.appliedPromo.discountPercent / 100);
      } else if (this.state.appliedPromo.discountAmount) {
        discount = Math.min(this.state.appliedPromo.discountAmount, subtotal);
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const tax = discountedSubtotal * 0.0825;
    const finalTotal = discountedSubtotal + tax;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;

    if (discountRow && discountAmountEl) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        discountAmountEl.textContent = `-$${discount.toFixed(2)}`;
      } else {
        discountRow.style.display = 'none';
      }
    }
  }

  applyPromoCode() {
    const input = document.getElementById('promoCodeInput');
    const badgeContainer = document.getElementById('promoBadgeContainer');
    if (!input) return;

    const code = input.value.trim().toUpperCase();
    const promo = MENU_DATA.promoCodes[code];

    if (promo) {
      this.state.appliedPromo = promo;
      if (badgeContainer) {
        badgeContainer.innerHTML = `
          <div class="promo-applied-badge">
            <span>🎉 Coupon <strong>${code}</strong> applied (${promo.description})</span>
            <button style="background:none;border:none;color:#ef4444;cursor:pointer;" id="btnRemovePromo">✕</button>
          </div>
        `;
        document.getElementById('btnRemovePromo')?.addEventListener('click', () => {
          this.state.appliedPromo = null;
          badgeContainer.innerHTML = '';
          input.value = '';
          this.renderCart();
          this.showToast('Promo code removed');
        });
      }
      this.showToast(`Applied ${code}! ${promo.description}`);
      this.renderCart();
    } else {
      this.showToast('Invalid promo code. Try FRESH20 or CAVALOVER15');
    }
  }

  openCartDrawer() {
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('cartDrawerBackdrop')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeCartDrawer() {
    document.getElementById('cartDrawer')?.classList.remove('open');
    document.getElementById('cartDrawerBackdrop')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ========================================================================
  // Quick View / Nutrition Modal
  // ========================================================================
  openQuickView(item) {
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="quickview-img">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <h2 class="quickview-title">${item.name}</h2>
        <span style="font-size: 1.5rem; font-weight: 800; color: var(--primary); font-family: var(--font-heading);">$${item.price.toFixed(2)}</span>
      </div>
      <p class="quickview-desc">${item.description}</p>

      <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.65rem;">Nutritional Breakdown (Per Serving)</h4>
      <div class="macro-chart">
        <div>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--primary); font-family: var(--font-heading);">${item.calories}</div>
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Calories</div>
        </div>
        <div>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--secondary); font-family: var(--font-heading);">${item.protein}</div>
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Protein</div>
        </div>
        <div>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--accent-gold); font-family: var(--font-heading);">${item.carbs}</div>
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Carbs</div>
        </div>
        <div>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--accent-olive); font-family: var(--font-heading);">${item.fat}</div>
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Total Fat</div>
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.35rem;">Fresh Scratch Ingredients:</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted);">${item.ingredients.join(', ')}</p>
      </div>

      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700;">Allergen Information:</h4>
        <div class="allergen-pills">
          ${item.allergens && item.allergens.length > 0 
            ? item.allergens.map(a => `<span class="allergen-pill">⚠️ Contains ${a}</span>`).join('')
            : '<span style="font-size: 0.82rem; color: #10b981; font-weight: 700;">✓ No major allergens</span>'}
        </div>
      </div>

      <button class="btn-primary" style="width: 100%; justify-content: center;" id="btnModalAddToCart">
        Add to Order Bag • $${item.price.toFixed(2)}
      </button>
    `;

    document.getElementById('btnModalAddToCart')?.addEventListener('click', () => {
      this.addToCart(item);
      this.closeModal('quickViewModal');
    });

    this.openModal('quickViewModal');
  }

  // ========================================================================
  // Checkout & Receipt Modal
  // ========================================================================
  handleCheckout() {
    if (this.state.cart.length === 0) return;

    this.closeCartDrawer();
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    const box = document.getElementById('receiptSummaryBox');

    let subtotal = 0;
    const itemsListHtml = this.state.cart.map(item => {
      const cost = item.price * item.quantity;
      subtotal += cost;
      return `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>${item.quantity}x ${item.name}</span>
          <span style="font-weight: 700;">$${cost.toFixed(2)}</span>
        </div>
      `;
    }).join('');

    let discount = 0;
    if (this.state.appliedPromo) {
      if (this.state.appliedPromo.discountPercent) {
        discount = subtotal * (this.state.appliedPromo.discountPercent / 100);
      } else if (this.state.appliedPromo.discountAmount) {
        discount = Math.min(this.state.appliedPromo.discountAmount, subtotal);
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const tax = discountedSubtotal * 0.0825;
    const finalTotal = discountedSubtotal + tax;

    if (box) {
      box.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem; border-bottom: 1px dashed var(--border-light); padding-bottom: 0.75rem;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Order #${orderNumber}</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary);">${this.state.fulfillmentType.toUpperCase()} • Ready in ${this.state.selectedLocation.readyIn}</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">Location: ${this.state.selectedLocation.name}</div>
        </div>

        <div style="margin-bottom: 1rem;">
          ${itemsListHtml}
        </div>

        <div style="border-top: 1px dashed var(--border-light); padding-top: 0.75rem; display: flex; flex-direction: column; gap: 0.25rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          ${discount > 0 ? `
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #10b981;">
              <span>Discount</span>
              <span>-$${discount.toFixed(2)}</span>
            </div>
          ` : ''}
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
            <span>Sales Tax (8.25%)</span>
            <span>$${tax.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; margin-top: 0.4rem; color: var(--primary);">
            <span>Paid in Full</span>
            <span>$${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      `;
    }

    // Clear cart
    this.state.cart = [];
    this.state.appliedPromo = null;
    const badgeContainer = document.getElementById('promoBadgeContainer');
    if (badgeContainer) badgeContainer.innerHTML = '';
    const input = document.getElementById('promoCodeInput');
    if (input) input.value = '';
    this.saveCart();

    this.openModal('checkoutModal');
    this.showToast('Order received! Kitchen is preparing your Mediterranean meal.');
  }

  // ========================================================================
  // Location Picker
  // ========================================================================
  renderLocationsList() {
    const container = document.getElementById('locationListContainer');
    if (!container) return;

    container.innerHTML = MENU_DATA.locations.map(loc => `
      <div class="option-card ${loc.id === this.state.selectedLocation.id ? 'selected' : ''}" data-loc-id="${loc.id}" style="padding: 0.95rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-weight: 800; font-size: 1rem; color: var(--text-main);">${loc.name}</div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">${loc.address}</div>
            <div style="font-size: 0.78rem; color: var(--accent-olive); margin-top: 0.35rem; font-weight: 600;">
              🟢 ${loc.status} • ${loc.hours} (${loc.distance})
            </div>
          </div>
          <div class="option-check">${loc.id === this.state.selectedLocation.id ? '✓' : ''}</div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.locId;
        const loc = MENU_DATA.locations.find(l => l.id === id);
        if (loc) {
          this.state.selectedLocation = loc;
          const nameEl = document.getElementById('selectedLocationName');
          if (nameEl) nameEl.textContent = loc.name.replace('CAVA ', '');
          this.renderLocationsList();
          this.closeModal('locationModal');
          this.showToast(`Selected location: ${loc.name}`);
        }
      });
    });
  }

  // ========================================================================
  // Modal Utilities
  // ========================================================================
  openModal(modalId) {
    document.getElementById(modalId)?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ========================================================================
  // Toast Notifications
  // ========================================================================
  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Instantiate application once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.cavaApp = new CavaApp();
});
