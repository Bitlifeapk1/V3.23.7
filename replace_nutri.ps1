$filepath = "c:\Users\786\Desktop\Cava menu\cava-pita-menu-post.html"
$content = Get-Content $filepath -Raw

$old_css = '    /\* Nutrition Bars \*/\s*\.nutrition-list \{.*?\}\s*\.cal-bar-fill \{.*?\}'
$new_css = @"
    /* Nutrition Card Grid */
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
    }
"@

$old_html = '        <!-- Premium Nutrition Calorie Bars -->\s*<div class="nutrition-list">.*?</div>\s*</div>'
$new_html = @"
        <!-- Premium Nutrition Grid -->
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
        </div>
"@

$content = $content -replace '(?s)    /\* Nutrition Bars \*/.*?\.cal-bar-fill \{[^\}]*\}', $new_css
$content = $content -replace '(?s)        <!-- Premium Nutrition Calorie Bars -->\s*<div class="nutrition-list">.*?</div>\s*</div>', $new_html

Set-Content -Path $filepath -Value $content -Encoding UTF8
Write-Host "Updated"
