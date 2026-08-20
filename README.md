# CAVA Mediterranean Menu Web Application 🥗✨

A modern, interactive website for the **CAVA Mediterranean Culinary Experience**, featuring chef-curated grain bowls, warm folded pitas, legendary dips, an interactive "Build Your Own Bowl" studio with live macro tracking, dietary filters, and a slide-over bag ordering system with simulated checkout.

---

## 🌟 Key Features

1. **Interactive "Build Your Own Bowl" Studio**:
   - 5-step custom configurator: Base, Dips & Spreads, Proteins, Toppings, and Dressings.
   - Real-time nutrition and macro tracking (Calories, Protein, Carbs, and Healthy Fats).
   - Selection limit enforcement and instant "Add Custom Bowl to Bag" integration.

2. **Chef-Curated Menu Explorer**:
   - Filter by categories (*Curated Bowls, Warm Pitas, Greens & Grains, Dips & Spreads, Drinks & Sweets*).
   - Real-time search by ingredient or dish name.
   - Multi-tag dietary filter chips (*High Protein, Vegetarian, Vegan, Gluten-Free, Dairy-Free, Favorites*).
   - Favorite heart toggle persisted in `localStorage`.

3. **Detailed Nutrition & Allergen Modals**:
   - Per-serving breakdown of calories, macros, scratch-made ingredient list, and allergen warnings (Milk, Sesame, Wheat).

4. **Slide-Over Bag & Checkout System**:
   - Slide-out order drawer with custom bowl breakdown.
   - Quantity controls, fulfillment switcher (*Pickup, Delivery, Dine-in*).
   - Interactive promo code validation (Try `FRESH20` for 20% off or `CAVALOVER15` for 15% off).
   - Full simulated receipt generation with order number and pickup ready-time.

5. **Store Locator**:
   - Live location picker with opening hours, distances, and status.

6. **Design & Aesthetics**:
   - Warm Mediterranean terracotta, olive green, and saffron color palette.
   - Smooth glassmorphism header, responsive design for all screen sizes, micro-animations, and Dark / Light theme toggle.

---

## 🚀 How to Run Locally

### Option 1: One-Click Windows Launcher
Double-click `start-server.bat` in the project folder. It will start the server and open your default browser at `http://localhost:8080`.

### Option 2: PowerShell
Run the following in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1 -Port 8080
```
Then visit [http://localhost:8080](http://localhost:8080).

### Option 3: Direct Browser File
You can also open `index.html` directly in any modern web browser.

---

## 📁 Project Structure

```
Cava menu/
├── images/                  # High-resolution generated Mediterranean culinary photography
│   ├── hero_bowl.jpg
│   ├── harissa_avocado.jpg
│   ├── tahini_caesar.jpg
│   ├── pita_falafel.jpg
│   ├── dips_spreads.jpg
│   └── drinks_beverages.jpg
├── js/
│   ├── data.js              # Full menu items, builder steps, allergens, macros, locations
│   └── app.js               # Application state, builder logic, search/filters, cart drawer, modals
├── index.html               # Semantic HTML5 layout
├── style.css                # Responsive Mediterranean design system & theme variables
├── server.ps1               # Zero-dependency local HTTP server in PowerShell
├── start-server.bat         # Double-clickable server launcher
└── README.md                # Project documentation
```
