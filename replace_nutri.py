import re

filepath = "c:\\Users\\786\\Desktop\\Cava menu\\cava-pita-menu-post.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace CSS
old_css = r"""    /\* Nutrition Bars \*/
    \.nutrition-list \{
      background: var\(--bg-card\);
      border-radius: var\(--radius-lg\);
      padding: 40px;
      box-shadow: var\(--shadow-md\);
      border: 1px solid var\(--border-light\);
      margin: 40px 0;
    \}
    \.nutrition-item \{ margin-bottom: 25px; \}
    \.nutrition-item:last-child \{ margin-bottom: 0; \}
    \.nutrition-info \{ display: flex; justify-content: space-between; margin-bottom: 10px; \}
    \.nutrition-name \{ font-weight: 700; color: var\(--secondary\); font-family: var\(--font-heading\); font-size: 1\.15rem; \}
    \.nutrition-cal \{ font-weight: 800; color: var\(--primary\); \}
    \.cal-bar-bg \{ width: 100%; height: 12px; background: var\(--border-light\); border-radius: 10px; overflow: hidden; \}
    \.cal-bar-fill \{ height: 100%; border-radius: 10px; transition: width 1s ease; \}"""

new_css = """    /* Nutrition Card Grid */
    .nutrition-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin: 40px 0;
    }
    .nutri-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 16px;
      padding: 25px 20px;
      text-align: center;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .nutri-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 4px;
      background: var(--secondary-light);
      transition: height 0.3s ease;
      opacity: 0.5;
    }
    .nutri-card.highlight::before {
      background: var(--primary);
      opacity: 1;
    }
    .nutri-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
      border-color: var(--primary-glow);
    }
    .nutri-card:hover::before {
      height: 100%;
      opacity: 0.05;
    }
    .nutri-name {
      font-family: var(--font-heading);
      font-weight: 700;
      color: var(--secondary);
      font-size: 1.15rem;
      margin-bottom: 15px;
      line-height: 1.3;
    }
    .nutri-cal {
      font-size: 2rem;
      font-weight: 900;
      color: var(--primary);
      font-family: var(--font-heading);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .nutri-cal span {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }"""

content = re.sub(old_css, new_css, content)

# Replace HTML
old_html = r"""        <!-- Premium Nutrition Calorie Bars -->
        <div class="nutrition-list">
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Falafel Veggie Pita</span>
              <span class="nutrition-cal">600 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 60%; background: #607955;"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Chicken Shawarma Pita</span>
              <span class="nutrition-cal">640 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 64%; background: #f59e0b;"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Lemon Herb Chicken Pita</span>
              <span class="nutrition-cal">700 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 70%; background: #f59e0b;"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Spicy Lamb Meatball Pita</span>
              <span class="nutrition-cal">750 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 75%; background: var\(--primary\);"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Steak \+ Feta Pita</span>
              <span class="nutrition-cal">805 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 80%; background: var\(--primary\);"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Greek Chicken Pita</span>
              <span class="nutrition-cal">870 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 87%; background: var\(--primary-hover\);"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Spicy Chicken Avocado Pita</span>
              <span class="nutrition-cal">970 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 97%; background: #e63946;"></div></div>
          </div>
        </div>"""

new_html = """        <!-- Premium Nutrition Grid -->
        <div class="nutrition-card-grid">
          <div class="nutri-card">
            <div class="nutri-name">Falafel Veggie Pita</div>
            <div class="nutri-cal">600 <span>Calories</span></div>
          </div>
          <div class="nutri-card">
            <div class="nutri-name">Chicken Shawarma Pita</div>
            <div class="nutri-cal">640 <span>Calories</span></div>
          </div>
          <div class="nutri-card">
            <div class="nutri-name">Lemon Herb Chicken Pita</div>
            <div class="nutri-cal">700 <span>Calories</span></div>
          </div>
          <div class="nutri-card">
            <div class="nutri-name">Spicy Lamb Meatball Pita</div>
            <div class="nutri-cal">750 <span>Calories</span></div>
          </div>
          <div class="nutri-card">
            <div class="nutri-name">Steak + Feta Pita</div>
            <div class="nutri-cal">805 <span>Calories</span></div>
          </div>
          <div class="nutri-card">
            <div class="nutri-name">Greek Chicken Pita</div>
            <div class="nutri-cal">870 <span>Calories</span></div>
          </div>
          <div class="nutri-card highlight">
            <div class="nutri-name">Spicy Chicken Avocado Pita</div>
            <div class="nutri-cal">970 <span>Calories</span></div>
          </div>
        </div>"""

content = re.sub(old_html, new_html, content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("done")
