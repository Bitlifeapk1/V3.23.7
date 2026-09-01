$filepath = "c:\Users\786\Desktop\Cava menu\cava-pita-menu-post.html"
$content = Get-Content $filepath -Raw

$new_css = @"
  <style>
    /* Premium Additions for Editorial Flow with Glassmorphism & Micro-animations */
    
    :root {
      --glass-bg: rgba(255, 255, 255, 0.75);
      --glass-border: rgba(255, 255, 255, 0.5);
      --neon-orange: rgba(240, 101, 34, 0.6);
      --neon-green: rgba(27, 59, 43, 0.3);
    }

    body {
      background: linear-gradient(135deg, #F8F6F0 0%, #E8E5D8 100%);
      background-attachment: fixed;
    }

    .article-section {
      padding: 6rem 0;
      position: relative;
    }
    
    .article-section.bg-subtle {
      background: rgba(248, 246, 240, 0.4);
      backdrop-filter: blur(8px);
      border-top: 1px solid var(--glass-border);
      border-bottom: 1px solid var(--glass-border);
    }
    
    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }
    
    .text-content p {
      font-size: 1.2rem;
      color: #444;
      margin-bottom: 1.8rem;
      line-height: 1.8;
    }

    .text-content h2 {
      font-family: var(--font-heading);
      font-size: 2.8rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 1.8rem;
      letter-spacing: -1px;
      position: relative;
      display: inline-block;
    }

    .text-content h2::after {
      content: '';
      position: absolute;
      bottom: -8px; left: 0;
      width: 60px; height: 5px;
      background: linear-gradient(90deg, var(--primary), #ff8c4a);
      border-radius: 4px;
      box-shadow: 0 4px 10px var(--neon-orange);
    }

    .text-content h3 {
      font-family: var(--font-heading);
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--primary);
      margin: 2.5rem 0 1.2rem 0;
    }

    .image-block {
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0,0,0,0.1), 0 0 40px var(--neon-green);
      position: relative;
      border: 3px solid rgba(255,255,255,0.8);
      transform: perspective(1000px) rotateY(-5deg);
      transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease;
    }

    .image-block:hover {
      transform: perspective(1000px) rotateY(0deg) scale(1.02);
      box-shadow: 0 35px 70px rgba(0,0,0,0.15), 0 0 60px var(--neon-green);
    }
    
    .image-block img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }

    .image-block:hover img {
      transform: scale(1.05);
    }

    /* Glassmorphism Comparison Table */
    .cava-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--glass-bg);
      backdrop-filter: blur(16px);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);
      border: 1px solid var(--glass-border);
      margin: 3rem 0;
    }
    .cava-table th, .cava-table td {
      padding: 1.5rem;
      text-align: left;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .cava-table th {
      background: rgba(255,255,255,0.8);
      font-family: var(--font-heading);
      color: var(--secondary);
      font-weight: 800;
      font-size: 1.15rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .cava-table tr:last-child td { border-bottom: none; }
    .cava-table tbody tr {
      transition: background 0.3s, transform 0.2s;
    }
    .cava-table tbody tr:hover { 
      background: rgba(255,255,255,0.9);
      transform: scale(1.01);
      box-shadow: 0 5px 15px rgba(0,0,0,0.03);
      position: relative;
      z-index: 10;
    }

    /* Premium FAQ Cards */
    .faq-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 3rem;
    }
    .faq-card {
      background: var(--glass-bg);
      backdrop-filter: blur(12px);
      padding: 2.5rem;
      border-radius: 20px;
      border: 1px solid var(--glass-border);
      border-left: 5px solid var(--primary);
      box-shadow: 0 10px 30px rgba(0,0,0,0.04);
      transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    
    .faq-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s;
    }

    .faq-card:hover {
      box-shadow: 0 20px 40px rgba(0,0,0,0.08), 0 0 20px var(--neon-orange);
      transform: translateY(-8px);
      border-color: rgba(255,255,255,0.9);
    }

    .faq-card:hover::after {
      opacity: 1;
    }

    .faq-card h3 { 
      margin-top: 0; color: var(--secondary); font-size: 1.4rem; font-family: var(--font-heading); 
      margin-bottom: 1rem;
    }
    .faq-card p { margin-bottom: 0; font-size: 1.1rem; color: #555; line-height: 1.6; }
    
    .full-width-text {
      max-width: 850px;
      margin: 0 auto;
      text-align: center;
    }
    .full-width-text p {
      font-size: 1.25rem;
      color: #555;
      margin-bottom: 1.8rem;
      line-height: 1.8;
    }

    /* Premium Callout */
    .callout {
      background: linear-gradient(135deg, var(--secondary) 0%, #0d1e15 100%);
      color: white;
      padding: 4rem 3rem;
      border-radius: 30px;
      margin: 5rem 0;
      text-align: center;
      box-shadow: 0 30px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2);
      position: relative;
      overflow: hidden;
    }

    .callout::before {
      content: '';
      position: absolute;
      top: -100px; left: 50%; transform: translateX(-50%);
      width: 600px; height: 300px;
      background: radial-gradient(ellipse, rgba(240, 101, 34, 0.2) 0%, transparent 70%);
      pointer-events: none;
    }

    .callout h2 { color: white; border: none; margin-top: 0; font-family: var(--font-heading); font-size: 2.6rem; position: relative; z-index: 2; margin-bottom: 1.5rem; }
    .callout p { color: rgba(255,255,255,0.85); font-size: 1.25rem; max-width: 800px; margin: 0 auto; line-height: 1.8; position: relative; z-index: 2; }
  </style>
"@

$new_content = $content -replace '(?s)<style>.*?</style>', $new_css
Set-Content -Path $filepath -Value $new_content -Encoding UTF8
Write-Host "Pita post updated successfully"
