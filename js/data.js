// CAVA Mediterranean Menu Dataset & Builder Configuration
export const MENU_DATA = {
  categories: [
    { id: "all", label: "All Items", icon: "✨" },
    { id: "curated-bowls", label: "Curated Bowls", icon: "🥗" },
    { id: "pitas", label: "Warm Pitas", icon: "🥙" },
    { id: "greens-grains", label: "Greens & Grains", icon: "🌿" },
    { id: "dips-spreads", label: "Dips & Spreads", icon: "🧆" },
    { id: "drinks-sweets", label: "Drinks & Sweets", icon: "🍋" }
  ],

  items: [
    {
      id: "harissa-avocado-bowl",
      name: "Harissa Avocado Bowl",
      category: "curated-bowls",
      price: 13.95,
      calories: 680,
      protein: "38g",
      carbs: "54g",
      fat: "32g",
      badge: "Chef's Signature",
      isTrending: true,
      dietary: ["high-protein", "dairy-free"],
      image: "images/harissa_avocado.jpg",
      description: "Fiery hot harissa grilled chicken with fresh ripe avocado slices, roasted honey sweet potato cubes, pickled onions, feta crumbles, wild brown rice, and crisp baby greens with a drizzle of harissa vinaigrette.",
      ingredients: ["Grilled Harissa Chicken", "Fresh Avocado", "Roasted Sweet Potato", "Pickled Onions", "Crumbled Feta", "SuperGreens", "Brown Rice", "Harissa Vinaigrette"],
      allergens: ["Milk (Feta)"]
    },
    {
      id: "tahini-caesar-bowl",
      name: "Tahini Caesar Chicken Bowl",
      category: "curated-bowls",
      price: 13.45,
      calories: 590,
      protein: "42g",
      carbs: "28g",
      fat: "34g",
      badge: "Top Rated",
      isTrending: true,
      dietary: ["high-protein", "gluten-free-option"],
      image: "images/tahini_caesar.jpg",
      description: "Tender herb-marinated grilled chicken breast, crisp romaine lettuce, crunchy baked pita crisps, shaved parmesan crisps, diced Persian cucumbers, and pickled red onions tossed in our signature creamy sesame Tahini Caesar dressing.",
      ingredients: ["Herb Grilled Chicken", "Romaine Lettuce", "Parmesan Crisps", "Pita Crisps", "Persian Cucumbers", "Pickled Onions", "Tahini Caesar Dressing"],
      allergens: ["Sesame", "Milk", "Wheat (Pita Crisps)"]
    },
    {
      id: "braised-lamb-feta-bowl",
      name: "Braised Lamb & Feta Bowl",
      category: "curated-bowls",
      price: 14.85,
      calories: 740,
      protein: "44g",
      carbs: "62g",
      fat: "36g",
      badge: "Mediterranean Classic",
      isTrending: false,
      dietary: ["high-protein"],
      image: "images/hero_bowl.jpg",
      description: "Slow-roasted spiced braised lamb over saffron basmati rice and SuperGreens, accompanied by generous scoops of Crazy Feta and traditional hummus, kalamata olives, pickled onions, and fresh herb garnishes.",
      ingredients: ["Braised Spiced Lamb", "Crazy Feta Dip", "Traditional Hummus", "Saffron Basmati Rice", "SuperGreens", "Kalamata Olives", "Pickled Onions", "Garlic Dressing"],
      allergens: ["Milk", "Sesame"]
    },
    {
      id: "greek-salad-bowl",
      name: "Balsamic Date Chicken Salad",
      category: "curated-bowls",
      price: 12.95,
      calories: 510,
      protein: "36g",
      carbs: "38g",
      fat: "24g",
      badge: "Light & Fresh",
      isTrending: false,
      dietary: ["high-protein", "gluten-free"],
      image: "images/harissa_avocado.jpg",
      description: "Grilled chicken layered with organic arugula, diced tomato + cucumber, pickled red onions, crumbled feta cheese, and dried Medjool dates, finished with rich balsamic date vinaigrette.",
      ingredients: ["Grilled Chicken", "Baby Arugula", "Tomato + Cucumber Salad", "Crumbled Feta", "Medjool Dates", "Balsamic Date Vinaigrette"],
      allergens: ["Milk"]
    },
    {
      id: "crispy-falafel-pocket",
      name: "Crispy Falafel Pita Pocket",
      category: "pitas",
      price: 11.25,
      calories: 620,
      protein: "22g",
      carbs: "78g",
      fat: "26g",
      badge: "100% Vegetarian",
      isTrending: true,
      dietary: ["vegetarian", "dairy-free-option"],
      image: "images/pita_falafel.jpg",
      description: "Warm fluffy stone-baked pita pocket filled to the brim with scratch-made golden falafel balls, cool cucumber dill tzatziki, silky hummus, Persian cucumber salad, and pickled onions.",
      ingredients: ["Golden Falafel", "Traditional Hummus", "Cucumber Dill Tzatziki", "Diced Tomatoes", "Persian Cucumbers", "Pickled Onions", "Warm Pita Pocket"],
      allergens: ["Wheat", "Sesame", "Milk (Tzatziki)"]
    },
    {
      id: "spicy-harissa-chicken-pita",
      name: "Spicy Harissa Chicken Pita",
      category: "pitas",
      price: 12.50,
      calories: 670,
      protein: "39g",
      carbs: "64g",
      fat: "29g",
      badge: "Bold & Spicy",
      isTrending: false,
      dietary: ["high-protein"],
      image: "images/pita_falafel.jpg",
      description: "Freshly seared fiery harissa chicken wrapped inside a warm Greek pita with Crazy Feta, fiery broccoli, pickled red onions, fresh romaine, and Greek vinaigrette.",
      ingredients: ["Harissa Grilled Chicken", "Crazy Feta", "Fiery Broccoli", "Romaine Lettuce", "Pickled Onions", "Greek Vinaigrette", "Warm Pita"],
      allergens: ["Wheat", "Milk"]
    },
    {
      id: "supergreens-grains-bowl",
      name: "SuperGreens & RightRice™ Bowl",
      category: "greens-grains",
      price: 12.75,
      calories: 460,
      protein: "24g",
      carbs: "52g",
      fat: "18g",
      badge: "Plant Powered",
      isTrending: false,
      dietary: ["vegan", "vegetarian", "gluten-free", "dairy-free"],
      image: "images/hero_bowl.jpg",
      description: "High-protein RightRice blended with organic spinach, shredded kale, roasted seasonal veggies, traditional hummus, roasted eggplant spread, and lemon herb tahini dressing.",
      ingredients: ["SuperGreens (Kale & Spinach)", "RightRice", "Roasted Eggplant Dip", "Traditional Hummus", "Roasted Vegetables", "Lemon Herb Tahini"],
      allergens: ["Sesame"]
    },
    {
      id: "artisan-dips-sampler",
      name: "Signature 4-Dip Tasting Board",
      category: "dips-spreads",
      price: 9.95,
      calories: 490,
      protein: "14g",
      carbs: "58g",
      fat: "24g",
      badge: "Shareable",
      isTrending: true,
      dietary: ["vegetarian"],
      image: "images/dips_spreads.jpg",
      description: "Generous portions of our 4 signature dips: Crazy Feta with jalapeños, silky traditional hummus with sumac olive oil, smoky roasted red pepper eggplant dip, and cooling cucumber tzatziki with 2 warm toasted pita bread rounds.",
      ingredients: ["Crazy Feta", "Traditional Hummus", "Roasted Eggplant Spread", "Cucumber Tzatziki", "Toasted Pita Wedges"],
      allergens: ["Milk", "Sesame", "Wheat"]
    },
    {
      id: "crazy-feta-pita-chips",
      name: "Crazy Feta® & House Pita Crisps",
      category: "dips-spreads",
      price: 6.45,
      calories: 380,
      protein: "10g",
      carbs: "34g",
      fat: "22g",
      badge: "Fan Favorite",
      isTrending: false,
      dietary: ["vegetarian"],
      image: "images/dips_spreads.jpg",
      description: "Our world-famous infused feta whipped with extra virgin olive oil, jalapeños, and Mediterranean spices, served with crunchy seasoned house-baked pita crisps.",
      ingredients: ["Crazy Feta Dip", "Seasoned Baked Pita Crisps"],
      allergens: ["Milk", "Wheat"]
    },
    {
      id: "cucumber-mint-limeade",
      name: "House Cucumber Mint Limeade",
      category: "drinks-sweets",
      price: 3.95,
      calories: 90,
      protein: "0g",
      carbs: "22g",
      fat: "0g",
      badge: "Freshly Pressed",
      isTrending: true,
      dietary: ["vegan", "gluten-free", "dairy-free"],
      image: "images/drinks_beverages.jpg",
      description: "Cold-pressed Persian cucumbers, fresh spearmint leaves, zesty key lime juice, lightly sweetened with pure cane sugar and filtered sparkling water.",
      ingredients: ["Fresh Cucumber Juice", "Key Lime Juice", "Spearmint", "Pure Cane Sugar", "Filtered Water"],
      allergens: []
    },
    {
      id: "blackberry-lavender-tea",
      name: "Blackberry Lavender Green Tea",
      category: "drinks-sweets",
      price: 3.95,
      calories: 85,
      protein: "0g",
      carbs: "20g",
      fat: "0g",
      badge: "House Brewed",
      isTrending: false,
      dietary: ["vegan", "gluten-free", "dairy-free"],
      image: "images/drinks_beverages.jpg",
      description: "Brewed organic Mediterranean green tea steeped with wild blackberries, fragrant French lavender buds, and freshly squeezed lemon.",
      ingredients: ["Organic Green Tea", "Wild Blackberries", "Lavender Blossoms", "Lemon"],
      allergens: []
    }
  ],

  // Build Your Own Bowl Configurator Options
  builder: {
    basePrice: 12.95,
    steps: [
      {
        stepId: 1,
        title: "Choose Your Base",
        subtitle: "Pick up to 2 bases for your bowl foundation",
        maxSelect: 2,
        required: true,
        options: [
          { id: "saffron-rice", name: "Saffron Basmati Rice", calories: 190, protein: 4, carbs: 40, fat: 2, tags: ["vegan", "gluten-free"], icon: "🍚" },
          { id: "supergreens", name: "SuperGreens (Kale, Spinach, Romaine)", calories: 25, protein: 2, carbs: 4, fat: 0, tags: ["vegan", "gluten-free", "low-cal"], icon: "🥗" },
          { id: "brown-rice", name: "Brown Rice", calories: 170, protein: 4, carbs: 36, fat: 1.5, tags: ["vegan", "gluten-free"], icon: "🌾" },
          { id: "splendid-greens", name: "Baby Arugula & Spinach", calories: 20, protein: 2, carbs: 3, fat: 0, tags: ["vegan", "gluten-free", "low-cal"], icon: "🥬" },
          { id: "right-rice", name: "RightRice™ (High Protein Veggie Rice)", calories: 160, protein: 10, carbs: 28, fat: 1, tags: ["vegan", "high-protein", "gluten-free"], icon: "🌱" }
        ]
      },
      {
        stepId: 2,
        title: "Choose Dips & Spreads",
        subtitle: "Select up to 3 scratch-made signature Mediterranean dips",
        maxSelect: 3,
        required: true,
        options: [
          { id: "crazy-feta", name: "Crazy Feta®", calories: 110, protein: 4, carbs: 2, fat: 9, tags: ["vegetarian"], allergen: "Milk", icon: "🧀" },
          { id: "traditional-hummus", name: "Traditional Hummus", calories: 90, protein: 3, carbs: 9, fat: 5, tags: ["vegan", "gluten-free"], allergen: "Sesame", icon: "🧆" },
          { id: "red-pepper-hummus", name: "Roasted Red Pepper Hummus", calories: 95, protein: 3, carbs: 10, fat: 5, tags: ["vegan", "gluten-free"], allergen: "Sesame", icon: "🌶️" },
          { id: "roasted-eggplant", name: "Roasted Eggplant Spread", calories: 45, protein: 1, carbs: 5, fat: 2.5, tags: ["vegan", "gluten-free", "low-cal"], icon: "🍆" },
          { id: "tzatziki", name: "Cucumber Dill Tzatziki", calories: 40, protein: 2, carbs: 2, fat: 2.5, tags: ["vegetarian", "gluten-free"], allergen: "Milk", icon: "🥒" },
          { id: "harissa", name: "Fiery Harissa Paste", calories: 50, protein: 1, carbs: 3, fat: 4, tags: ["vegan", "gluten-free"], icon: "🔥" }
        ]
      },
      {
        stepId: 3,
        title: "Choose Your Protein",
        subtitle: "Select 1 primary protein (or double up for +$3.50)",
        maxSelect: 1,
        required: true,
        options: [
          { id: "harissa-chicken", name: "Harissa Honey Chicken", calories: 240, protein: 32, carbs: 6, fat: 9, extraCost: 0, tags: ["high-protein"], icon: "🍗" },
          { id: "grilled-chicken", name: "Grilled Herb Chicken Breast", calories: 200, protein: 34, carbs: 0, fat: 6, extraCost: 0, tags: ["high-protein", "gluten-free"], icon: "🍗" },
          { id: "braised-lamb", name: "Spiced Braised Lamb", calories: 290, protein: 30, carbs: 2, fat: 18, extraCost: 1.50, tags: ["high-protein"], icon: "🥩" },
          { id: "grilled-steak", name: "Grilled Marinated Steak", calories: 260, protein: 31, carbs: 1, fat: 14, extraCost: 1.50, tags: ["high-protein", "gluten-free"], icon: "🥩" },
          { id: "falafel", name: "Golden Crisp Falafel (4 pcs)", calories: 220, protein: 9, carbs: 24, fat: 11, extraCost: 0, tags: ["vegan", "vegetarian"], allergen: "Sesame", icon: "🧆" },
          { id: "roasted-veggies", name: "Roasted Medley Vegetables", calories: 110, protein: 4, carbs: 18, fat: 3, extraCost: 0, tags: ["vegan", "gluten-free"], icon: "🥕" }
        ]
      },
      {
        stepId: 4,
        title: "Add Fresh Toppings",
        subtitle: "Choose up to 5 crunchy, pickled, and savory toppings (Unlimited)",
        maxSelect: 6,
        required: false,
        options: [
          { id: "pickled-onions", name: "Pickled Red Onions", calories: 15, protein: 0, carbs: 3, fat: 0, tags: ["vegan"], icon: "🧅" },
          { id: "crumbled-feta", name: "Greek Crumbled Feta", calories: 60, protein: 4, carbs: 1, fat: 5, tags: ["vegetarian"], allergen: "Milk", icon: "🧀" },
          { id: "persian-cucumbers", name: "Persian Cucumbers", calories: 10, protein: 0, carbs: 2, fat: 0, tags: ["vegan"], icon: "🥒" },
          { id: "tomato-cucumber", name: "Tomato + Cucumber Salad", calories: 20, protein: 1, carbs: 4, fat: 0, tags: ["vegan"], icon: "🥗" },
          { id: "kalamata-olives", name: "Kalamata Olives", calories: 50, protein: 0, carbs: 2, fat: 5, tags: ["vegan"], icon: "🫒" },
          { id: "fiery-broccoli", name: "Fiery Charred Broccoli", calories: 45, protein: 3, carbs: 6, fat: 1.5, tags: ["vegan"], icon: "🥦" },
          { id: "pita-crisps", name: "House-Baked Pita Crisps", calories: 70, protein: 2, carbs: 12, fat: 2, tags: ["vegan"], allergen: "Wheat", icon: "🥨" },
          { id: "fresh-avocado", name: "Fresh Sliced Avocado", calories: 120, protein: 2, carbs: 6, fat: 10, extraCost: 1.95, tags: ["vegan", "gluten-free"], icon: "🥑" }
        ]
      },
      {
        stepId: 5,
        title: "Select Dressing",
        subtitle: "Choose up to 2 house-made vinaigrettes or dressings",
        maxSelect: 2,
        required: true,
        options: [
          { id: "garlic-dressing", name: "Creamy Garlic Dressing", calories: 140, protein: 1, carbs: 2, fat: 15, tags: ["vegetarian"], icon: "🧄" },
          { id: "tahini-caesar", name: "Sesame Tahini Caesar", calories: 130, protein: 2, carbs: 3, fat: 13, tags: ["vegetarian"], allergen: "Sesame", icon: "🥣" },
          { id: "hot-harissa-vinaigrette", name: "Hot Harissa Vinaigrette", calories: 110, protein: 0, carbs: 4, fat: 10, tags: ["vegan"], icon: "🌶️" },
          { id: "greek-vinaigrette", name: "Greek Herb Vinaigrette", calories: 120, protein: 0, carbs: 2, fat: 12, tags: ["vegan"], icon: "🌿" },
          { id: "lemon-herb-tahini", name: "Lemon Herb Tahini", calories: 100, protein: 2, carbs: 4, fat: 9, tags: ["vegan"], allergen: "Sesame", icon: "🍋" }
        ]
      }
    ]
  },

  promoCodes: {
    "CAVALOVER15": { discountPercent: 15, description: "15% off your Mediterranean feast" },
    "FRESH20": { discountPercent: 20, description: "20% off orders over $25" },
    "TASTECAVA": { discountAmount: 5.00, description: "$5.00 off welcome reward" }
  },

  locations: [
    { id: "loc-1", name: "CAVA Downtown Metropolis", address: "450 Grand Avenue, Suite 102", distance: "0.8 miles", status: "Open Now", hours: "10:30 AM - 10:00 PM", readyIn: "15-20 min" },
    { id: "loc-2", name: "CAVA Midtown Plaza", address: "780 Lexington Blvd", distance: "2.1 miles", status: "Open Now", hours: "10:30 AM - 9:30 PM", readyIn: "20-25 min" },
    { id: "loc-3", name: "CAVA West End Commons", address: "1220 Sunset Parkway", distance: "3.5 miles", status: "Open Now", hours: "11:00 AM - 10:00 PM", readyIn: "15-20 min" }
  ]
};
