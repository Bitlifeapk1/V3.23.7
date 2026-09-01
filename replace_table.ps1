$filepath = "c:\Users\786\Desktop\Cava menu\cava-pita-menu-post.html"
$content = Get-Content $filepath -Raw

$new_design = @"
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
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 75%; background: var(--primary);"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Steak + Feta Pita</span>
              <span class="nutrition-cal">805 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 80%; background: var(--primary);"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Greek Chicken Pita</span>
              <span class="nutrition-cal">870 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 87%; background: var(--primary-hover);"></div></div>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-info">
              <span class="nutrition-name">Spicy Chicken Avocado Pita</span>
              <span class="nutrition-cal">970 Cal</span>
            </div>
            <div class="cal-bar-bg"><div class="cal-bar-fill" style="width: 97%; background: #e63946;"></div></div>
          </div>
        </div>
"@

$css_add = @"
    /* --- Nutrition Bars --- */
    .nutrition-list {
      background: var(--bg-card);
      border-radius: var(--radius-lg);
      padding: 40px;
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border-light);
      margin: 40px 0;
    }
    .nutrition-item {
      margin-bottom: 25px;
    }
    .nutrition-item:last-child {
      margin-bottom: 0;
    }
    .nutrition-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .nutrition-name {
      font-weight: 700;
      color: var(--secondary);
      font-family: var(--font-heading);
      font-size: 1.15rem;
    }
    .nutrition-cal {
      font-weight: 800;
      color: var(--primary);
    }
    .cal-bar-bg {
      width: 100%;
      height: 12px;
      background: var(--border-light);
      border-radius: 10px;
      overflow: hidden;
    }
    .cal-bar-fill {
      height: 100%;
      border-radius: 10px;
      transition: width 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
"@

$content = $content -replace '(?s)        <div class="table-wrapper">\s*<table>\s*<thead>\s*<tr>\s*<th>Pita</th>\s*<th>Calories</th>\s*</tr>\s*</thead>\s*<tbody>\s*<tr><td>Falafel Veggie Pita</td><td>600</td></tr>\s*<tr><td>Chicken Shawarma Pita</td><td>640</td></tr>\s*<tr><td>Lemon Herb Chicken Pita</td><td>700</td></tr>\s*<tr><td>Spicy Lamb Meatball Pita</td><td>750</td></tr>\s*<tr><td>Steak \+ Feta Pita</td><td>805</td></tr>\s*<tr><td>Greek Chicken Pita</td><td>870</td></tr>\s*<tr><td>Spicy Chicken Avocado Pita</td><td>970</td></tr>\s*</tbody>\s*</table>\s*</div>', $new_design
$content = $content -replace '(?s)    /\* Responsive Design \*/', "$css_add`n    /* Responsive Design */"

Set-Content -Path $filepath -Value $content -Encoding UTF8
Write-Host "Updated"
