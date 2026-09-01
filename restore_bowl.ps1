$filepath = "c:\Users\786\Desktop\Cava menu\cava_bowl_post.html"
$content = Get-Content $filepath -Raw

$old_css = @"
        /* CSS Variables based on CAVA Palette */
        :root {
            --cava-green: #1B3B2B;
            --cava-orange: #F06522;
            --cava-cream: #F8F6F0;
            --cava-dark-grey: #2D2D2D;
            --cava-light-grey: #6B7280;
            --white: #FFFFFF;
            --border-color: #E2DFD5;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--cava-cream);
            color: var(--cava-dark-grey);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4, .brand-font {
            font-family: 'Outfit', sans-serif;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* --- Hero Section --- */
        .hero {
            background-color: var(--cava-green);
            color: var(--cava-cream);
            padding: 100px 20px;
            text-align: center;
            border-bottom: 6px solid var(--cava-orange);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(240, 101, 34, 0.15) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero-badge {
            display: inline-block;
            background-color: rgba(240, 101, 34, 0.2);
            color: var(--cava-orange);
            padding: 8px 16px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 1px;
            margin-bottom: 25px;
            text-transform: uppercase;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 25px;
            color: var(--white);
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero p {
            font-size: 1.25rem;
            max-width: 800px;
            margin: 0 auto;
            color: rgba(248, 246, 240, 0.85);
            font-weight: 300;
        }

        /* Hero Image */
        .hero-image-container {
            max-width: 900px;
            margin: -40px auto 40px auto;
            padding: 0 20px;
            position: relative;
            z-index: 10;
        }
        
        .hero-image {
            width: 100%;
            height: auto;
            border-radius: 20px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.15);
            border: 5px solid var(--white);
        }

        /* --- General Section Styling --- */
        .section {
            padding: 80px 0;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--cava-green);
            margin-bottom: 20px;
            position: relative;
            display: inline-block;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 60px;
            height: 4px;
            background-color: var(--cava-orange);
            border-radius: 2px;
        }

        .section-desc {
            font-size: 1.15rem;
            color: var(--cava-light-grey);
            max-width: 800px;
            margin-bottom: 40px;
        }

        /* --- Content Blocks (Standard Text) --- */
        .content-box {
            background: var(--white);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
            margin-bottom: 40px;
            border: 1px solid var(--border-color);
        }

        .content-box p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
        }
        
        .content-box p:last-child {
            margin-bottom: 0;
        }

        .content-box strong {
            color: var(--cava-green);
        }

        /* --- Modern Table --- */
        .table-wrapper {
            background: var(--white);
            border-radius: 20px;
            overflow-x: auto;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
            border: 1px solid var(--border-color);
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            min-width: 700px;
        }

        th, td {
            padding: 20px 25px;
            border-bottom: 1px solid var(--border-color);
        }

        th {
            background-color: var(--cava-cream);
            color: var(--cava-green);
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        tr:last-child td {
            border-bottom: none;
        }

        tbody tr {
            transition: background 0.2s;
        }

        tbody tr:hover {
            background-color: rgba(248, 246, 240, 0.5);
        }

        td {
            font-size: 1.05rem;
        }

        td:first-child {
            font-weight: 600;
            color: var(--cava-green);
        }

        .price-badge {
            background: rgba(240, 101, 34, 0.1);
            color: var(--cava-orange);
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 0.95rem;
            white-space: nowrap;
        }

        /* --- Signature Bowls Grid --- */
        .bowls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 30px;
            margin-top: 20px;
        }

        .bowl-card {
            background: var(--white);
            border-radius: 20px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        .bowl-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: var(--cava-orange);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
            z-index: 2;
        }

        .bowl-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            border-color: transparent;
        }

        .bowl-card:hover::before {
            transform: scaleX(1);
        }
        
        .bowl-card-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-bottom: 1px solid var(--border-color);
        }
        
        .bowl-card-content {
            padding: 30px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .bowl-card h3 {
            font-size: 1.6rem;
            color: var(--cava-green);
            margin-bottom: 15px;
        }

        .bowl-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }

        .stat-pill {
            background: var(--cava-cream);
            color: var(--cava-dark-grey);
            padding: 6px 12px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid var(--border-color);
        }
        
        .stat-pill.stat-price {
            background: var(--cava-green);
            color: var(--white);
            border-color: var(--cava-green);
        }

        .bowl-card p {
            color: var(--cava-light-grey);
            font-size: 1.05rem;
            margin-top: auto;
        }

        .best-for {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px dashed var(--border-color);
            font-size: 0.95rem;
            color: var(--cava-orange);
            font-weight: 600;
        }

        /* --- Steps Layout --- */
        .steps-wrapper {
            background: var(--white);
            border-radius: 20px;
            padding: 50px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
            border: 1px solid var(--border-color);
        }

        .step-row {
            display: flex;
            align-items: flex-start;
            margin-bottom: 40px;
        }

        .step-row:last-child {
            margin-bottom: 0;
        }

        .step-number {
            flex-shrink: 0;
            width: 60px;
            height: 60px;
            background: var(--cava-orange);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            font-weight: 800;
            font-family: 'Outfit', sans-serif;
            margin-right: 30px;
            box-shadow: 0 5px 15px rgba(240, 101, 34, 0.3);
        }

        .step-content h3 {
            font-size: 1.5rem;
            color: var(--cava-green);
            margin-bottom: 10px;
            margin-top: 10px;
        }

        .step-content p {
            color: var(--cava-light-grey);
            font-size: 1.1rem;
        }

        .pro-tip {
            background: var(--cava-cream);
            border-left: 4px solid var(--cava-green);
            padding: 20px;
            border-radius: 0 12px 12px 0;
            margin-top: 40px;
        }
        
        .pro-tip h4 {
            color: var(--cava-green);
            margin-bottom: 5px;
            font-size: 1.2rem;
        }

        /* --- Goal Cards (Featured) --- */
        .goals-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .goal-card {
            background: var(--cava-green);
            color: var(--white);
            padding: 30px;
            border-radius: 16px;
            transition: transform 0.3s;
        }
        
        .goal-card:hover {
            transform: translateY(-5px);
        }

        .goal-card h3 {
            color: var(--cava-orange);
            font-size: 1.4rem;
            margin-bottom: 15px;
        }

        .goal-card p {
            color: rgba(255,255,255,0.85);
            font-size: 1rem;
        }

        /* --- FAQ Accordion --- */
        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }

        details {
            background: var(--white);
            margin-bottom: 15px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            transition: all 0.3s ease;
        }

        details[open] {
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            border-color: var(--cava-orange);
        }

        summary {
            padding: 25px;
            font-family: 'Outfit', sans-serif;
            font-weight: 600;
            font-size: 1.2rem;
            color: var(--cava-green);
            cursor: pointer;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        summary::-webkit-details-marker {
            display: none;
        }

        summary::after {
            content: '+';
            color: var(--cava-orange);
            font-size: 1.8rem;
            font-weight: 300;
            transition: transform 0.3s ease;
        }

        details[open] summary::after {
            content: '−';
            transform: rotate(180deg);
        }

        .faq-answer {
            padding: 0 25px 25px 25px;
            color: var(--cava-light-grey);
            font-size: 1.1rem;
            line-height: 1.7;
        }

        /* --- Footer --- */
        footer {
            background-color: var(--cava-green);
            padding: 80px 20px 40px;
            margin-top: 80px;
            color: var(--white);
        }

        .footer-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .footer-content h2 {
            font-size: 2.2rem;
            margin-bottom: 25px;
            color: var(--white);
        }

        .footer-content p {
            font-size: 1.15rem;
            color: rgba(255,255,255,0.7);
            margin-bottom: 40px;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 0.9rem;
            color: rgba(255,255,255,0.5);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .hero { padding: 60px 20px; }
            .section-title { font-size: 2rem; }
            .content-box { padding: 25px; }
            .steps-wrapper { padding: 30px 20px; }
            .step-row { flex-direction: column; }
            .step-number { margin-bottom: 20px; }
            .hero-image-container { margin-top: -20px; }
        }
"@

$new_content = $content -replace '(?s)<style>.*?</style>', "<style>`n$old_css`n    </style>"
Set-Content -Path $filepath -Value $new_content -Encoding UTF8
Write-Host "Restored original Cava Bowl CSS"
