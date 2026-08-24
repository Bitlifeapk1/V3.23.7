new_post_html = """
<style>
  /* Premium Post Styles */
  .premium-intro {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--text-main);
    margin-bottom: 3rem;
  }
  .bowl-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }
  .bowl-card {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: 2rem;
    transition: var(--transition);
    border: 1px solid var(--border-light);
    position: relative;
    overflow: hidden;
  }
  .bowl-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
  }
  .bowl-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, var(--primary), var(--accent-gold));
  }
  .bowl-title {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    color: var(--secondary);
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .bowl-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed var(--border-light);
  }
  .bowl-price {
    background: var(--primary-light);
    color: var(--primary);
    padding: 0.4rem 1rem;
    border-radius: var(--radius-full);
    font-weight: 700;
    font-size: 1.1rem;
  }
  .bowl-cals {
    color: var(--text-muted);
    font-weight: 600;
    font-size: 0.95rem;
  }
  .bowl-specs {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }
  .bowl-specs li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .bowl-desc {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-main);
  }
  
  .step-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0 4rem 0;
  }
  .step-card {
    display: flex;
    gap: 1.5rem;
    background: var(--bg-card);
    padding: 2rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    border-left: 4px solid var(--primary);
  }
  .step-number {
    background: var(--primary);
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 800;
    flex-shrink: 0;
    font-family: var(--font-heading);
  }
  .step-content h3 {
    margin: 0 0 0.5rem 0;
    font-family: var(--font-heading);
    font-size: 1.4rem;
    color: var(--secondary);
  }
  .step-content p {
    margin: 0;
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.6;
  }
  
  .health-callout {
    background: var(--bg-subtle);
    border-radius: var(--radius-lg);
    padding: 2.5rem;
    text-align: center;
    margin: 3rem 0;
  }
  .health-callout h3 {
    font-family: var(--font-serif);
    font-size: 2rem;
    color: var(--secondary);
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    .step-card {
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
    }
  }
</style>

<p class="premium-intro">
  Staring at the CAVA menu and not sure what to order? You're not alone. CAVA lets you build your own bowl from scratch, and with dozens of possible combinations, that freedom can feel more confusing than helpful the first few times you visit. This guide gives you real CAVA prices, real calorie counts, every signature bowl on the current menu, and simple steps to build your own bowl the right way.
</p>

<h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--secondary); margin-bottom: 1rem;">Complete CAVA Signature Bowls (2026)</h2>
<p style="font-size: 1.1rem; color: var(--text-muted);">Compare the full lineup of signature bowls to find your perfect flavor and macros.</p>

<div class="bowl-grid">
  <!-- Bowl 1 -->
  <div class="bowl-card">
    <h3 class="bowl-title">Chicken + Rice Bowl</h3>
    <div class="bowl-meta">
      <span class="bowl-price">$11.55 - $13.25</span>
      <span class="bowl-cals">🔥 700-715 Cal</span>
    </div>
    <ul class="bowl-specs">
      <li>💪 <strong>Protein:</strong> High (~33g)</li>
      <li>✨ <strong>Best For:</strong> First-timers, balanced meals</li>
    </ul>
    <p class="bowl-desc">
      The ultimate safe, balanced order. Grilled chicken on saffron basmati rice with hummus, tzatziki, tomato and cucumber salad, and crumbled feta.
    </p>
  </div>

  <!-- Bowl 2 -->
  <div class="bowl-card">
    <h3 class="bowl-title">Harissa Avocado Bowl</h3>
    <div class="bowl-meta">
      <span class="bowl-price">$12.75 - $14.45</span>
      <span class="bowl-cals">🔥 810-885 Cal</span>
    </div>
    <ul class="bowl-specs">
      <li>💪 <strong>Protein:</strong> High</li>
      <li>✨ <strong>Best For:</strong> Bold, layered flavor</li>
    </ul>
    <p class="bowl-desc">
      Hits sweet, spicy, creamy, and tangy flavors all at once. Made with harissa honey chicken, Crazy Feta®, hummus, avocado, and fire-roasted corn.
    </p>
  </div>

  <!-- Bowl 3 -->
  <div class="bowl-card">
    <h3 class="bowl-title">Spicy Lamb + Avocado</h3>
    <div class="bowl-meta">
      <span class="bowl-price">$15.05 - $16.75</span>
      <span class="bowl-cals">🔥 ~795 Cal</span>
    </div>
    <ul class="bowl-specs">
      <li>💪 <strong>Protein:</strong> Moderate-High</li>
      <li>✨ <strong>Best For:</strong> Spice lovers</li>
    </ul>
    <p class="bowl-desc">
      One of the boldest picks on the menu. Seasoned lamb meatballs, avocado, Crazy Feta®, hummus, and lemon herb tahini dressing.
    </p>
  </div>
  
  <!-- Bowl 4 -->
  <div class="bowl-card">
    <h3 class="bowl-title">Yogurt Dill Salmon</h3>
    <div class="bowl-meta">
      <span class="bowl-price">$15.75 - $17.45</span>
      <span class="bowl-cals">🔥 ~710 Cal</span>
    </div>
    <ul class="bowl-specs">
      <li>💪 <strong>Protein:</strong> Very High (~35g)</li>
      <li>✨ <strong>Best For:</strong> Seafood lovers</li>
    </ul>
    <p class="bowl-desc">
      Arugula and saffron basmati rice with a lighter dressing, offering the highest protein of any salmon option.
    </p>
  </div>
  
  <!-- Bowl 5 -->
  <div class="bowl-card">
    <h3 class="bowl-title">Falafel Crunch</h3>
    <div class="bowl-meta">
      <span class="bowl-price">$11.55 - $13.25</span>
      <span class="bowl-cals">🔥 ~860 Cal</span>
    </div>
    <ul class="bowl-specs">
      <li>💪 <strong>Protein:</strong> Moderate (Vegan)</li>
      <li>✨ <strong>Best For:</strong> Vegetarians</li>
    </ul>
    <p class="bowl-desc">
      Crispy falafel, greens and grains, hummus, roasted eggplant dip, and pita crisps. High in fiber and extremely filling.
    </p>
  </div>
  
  <!-- Bowl 6 -->
  <div class="bowl-card">
    <h3 class="bowl-title">Steak + Harissa</h3>
    <div class="bowl-meta">
      <span class="bowl-price">$15.05 - $16.75</span>
      <span class="bowl-cals">🔥 ~615 Cal</span>
    </div>
    <ul class="bowl-specs">
      <li>💪 <strong>Protein:</strong> High</li>
      <li>✨ <strong>Best For:</strong> Lean red-meat option</li>
    </ul>
    <p class="bowl-desc">
      Thin-sliced, Mediterranean-seasoned steak over greens and grains with harissa, tzatziki, and hot harissa vinaigrette.
    </p>
  </div>
</div>

<div class="health-callout">
  <h3>How Much Does a CAVA Bowl Cost?</h3>
  <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-muted); max-width: 800px; margin: 0 auto;">
    A CAVA bowl costs between <strong>$10.97 and $19.89</strong>, depending on how you build it. Build-your-own orders sit at the lower end of that range, while signature bowls with premium proteins like steak, lamb, or salmon push closer to the top. Big cities or airports usually charge 10 to 15 percent more than the national average.
  </p>
</div>

<h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--secondary); margin-bottom: 2rem;">Build Your Own Bowl: Step-by-Step</h2>

<div class="step-container">
  <!-- Step 1 -->
  <div class="step-card">
    <div class="step-number">1</div>
    <div class="step-content">
      <h3>Choose Your Base</h3>
      <p>Your base sets the calorie floor. Light options like SuperGreens run 30-50 calories, while heartier choices like saffron rice or brown rice run 200-290 calories. The Greens + Grains mix (~132 cal) stays the most popular pick.</p>
    </div>
  </div>
  
  <!-- Step 2 -->
  <div class="step-card">
    <div class="step-number">2</div>
    <div class="step-content">
      <h3>Choose Your Protein</h3>
      <p>Grilled chicken offers the best protein-to-calorie ratio (~33g protein for 250 cal). Falafel, glazed salmon, spicy lamb meatballs, and braised lamb each bring different fat and carb levels.</p>
    </div>
  </div>
  
  <!-- Step 3 -->
  <div class="step-card">
    <div class="step-number">3</div>
    <div class="step-content">
      <h3>Choose Dips & Spreads (Up to 3 Free)</h3>
      <p>Hummus and tzatziki form the base layer in most signature bowls. Crazy Feta® and harissa add sharper, spicier notes. Don't skip the roasted eggplant dip for a deep, smoky flavor.</p>
    </div>
  </div>
  
  <!-- Step 4 -->
  <div class="step-card">
    <div class="step-number">4</div>
    <div class="step-content">
      <h3>Unlimited Toppings</h3>
      <p>All toppings are free! Pickled onions add almost no calories while cutting through richer proteins. Fire-roasted corn, kalamata olives, and sumac slaw bring distinct textures.</p>
    </div>
  </div>
  
  <!-- Step 5 -->
  <div class="step-card">
    <div class="step-number">5</div>
    <div class="step-content">
      <h3>Choose Your Dressing</h3>
      <p>Lemon herb tahini is the most popular, working with nearly every combination. Heavier dressings like garlic sauce pair better with lighter greens, while yogurt dill cools down spicy proteins.</p>
    </div>
  </div>
</div>

<h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--secondary); margin-top: 4rem; margin-bottom: 1.5rem;">Best CAVA Bowl for Every Goal</h2>

<div class="editorial-content-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
  <div class="feature-card highlight-card" style="background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 2px solid var(--accent-azure); box-shadow: var(--shadow-sm);">
    <div style="font-size: 2.5rem; margin-bottom: 1rem;">📉</div>
    <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--secondary);">Lowest Calories</h4>
    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
      Romaine/SuperGreens base, grilled chicken, tzatziki, roasted eggplant dip, and yogurt dill dressing (400-450 calories).
    </p>
  </div>
  
  <div class="feature-card" style="background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 2px solid var(--accent-gold); box-shadow: var(--shadow-sm);">
    <div style="font-size: 2.5rem; margin-bottom: 1rem;">💪</div>
    <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--secondary);">Maximum Protein</h4>
    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
      Double grilled chicken pushes total protein to 60-66g. Add black lentils for an extra 13-18g of plant protein.
    </p>
  </div>
  
  <div class="feature-card" style="background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 2px solid var(--accent-olive); box-shadow: var(--shadow-sm);">
    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🥑</div>
    <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--secondary);">Keto / Low-Carb</h4>
    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
      Skip grains. Romaine and arugula, grilled chicken, Crazy Feta®, tzatziki, avocado, and Greek vinaigrette.
    </p>
  </div>
</div>
"""

with open('cava-bowl-menu-post.html', 'w', encoding='utf-8') as f:
    f.write(new_post_html)

# Now rebuild cava-bowl-menu.html
with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

head = ''.join(lines[:140])
foot = ''.join(lines[1291:])

full_html = f'''{head}
<main class="site-main">
  <div class="container editorial-section" style="padding: 4rem 0; max-width: 1000px; margin: 0 auto;">
    <header class="section-header" style="text-align: center; margin-bottom: 4rem;">
      <span class="section-tag" style="background: var(--primary-light); color: var(--primary); padding: 0.5rem 1.5rem; border-radius: 50px; font-weight: 700; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase;">Menu Guide</span>
      <h1 class="section-title" style="font-size: 3.5rem; margin-top: 1.5rem; font-family: var(--font-serif); color: var(--secondary); line-height: 1.2;">CAVA Bowl Menu 2026:<br>Prices, Calories & Nutrition</h1>
    </header>
    <div class="editorial-main-text">
      {new_post_html}
    </div>
  </div>
</main>
{foot}
'''

with open('cava-bowl-menu.html', 'w', encoding='utf-8') as f:
    f.write(full_html)

print("Redesign complete.")
