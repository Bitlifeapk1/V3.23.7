$filepath = "c:\Users\786\Desktop\Cava menu\cava_bowl_post.html"
$content = Get-Content $filepath -Raw

$new_css = @"
        /* Premium CSS Variables */
        :root {
            --cava-green: #1B3B2B;
            --cava-orange: #F06522;
            --cava-cream: #F8F6F0;
            --cava-dark-grey: #2D2D2D;
            --cava-light-grey: #6B7280;
            --white: #FFFFFF;
            --border-color: rgba(226, 223, 213, 0.4);
            --glass-bg: rgba(255, 255, 255, 0.7);
            --glass-border: rgba(255, 255, 255, 0.5);
            --neon-glow: rgba(240, 101, 34, 0.4);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #F8F6F0 0%, #E8E5D8 100%);
            background-attachment: fixed;
            color: var(--cava-dark-grey);
            line-height: 1.7;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }

        h1, h2, h3, h4, .brand-font {
            font-family: 'Outfit', sans-serif;
        }

        .container {
            max-width: 1150px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* --- Hero Section --- */
        .hero {
            background: linear-gradient(135deg, var(--cava-green) 0%, #0d1e15 100%);
            color: var(--cava-cream);
            padding: 140px 20px 100px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-bottom: 4px solid var(--cava-orange);
        }

        .hero::before, .hero::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
        }
        
        .hero::before {
            top: -100px;
            right: -100px;
            width: 400px;
            height: 400px;
            background: rgba(240, 101, 34, 0.4);
            animation: pulse-glow 8s infinite alternate;
        }

        .hero::after {
            bottom: -150px;
            left: -100px;
            width: 500px;
            height: 500px;
            background: rgba(45, 200, 120, 0.2);
            animation: pulse-glow 12s infinite alternate-reverse;
        }

        @keyframes pulse-glow {
            0% { transform: scale(1) translate(0, 0); opacity: 0.6; }
            100% { transform: scale(1.1) translate(20px, -20px); opacity: 0.9; }
        }

        .hero-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #FFD1A9;
            padding: 8px 24px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 2px;
            margin-bottom: 30px;
            text-transform: uppercase;
            position: relative;
            z-index: 10;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
        }

        .hero h1 {
            font-size: 4rem;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: 30px;
            color: var(--white);
            max-width: 950px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            z-index: 10;
            text-shadow: 0 10px 30px rgba(0,0,0,0.3);
            background: linear-gradient(to right, #ffffff, #e0e0e0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 1.35rem;
            max-width: 800px;
            margin: 0 auto;
            color: rgba(255, 255, 255, 0.85);
            font-weight: 300;
            position: relative;
            z-index: 10;
            line-height: 1.8;
        }

        /* Hero Image */
        .hero-image-container {
            max-width: 1000px;
            margin: -70px auto 60px auto;
            padding: 0 20px;
            position: relative;
            z-index: 20;
            perspective: 1000px;
        }
        
        .hero-image {
            width: 100%;
            height: auto;
            border-radius: 24px;
            box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 40px var(--neon-glow);
            border: 4px solid rgba(255,255,255,0.8);
            transform: rotateX(5deg) translateY(0);
            transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease;
        }

        .hero-image-container:hover .hero-image {
            transform: rotateX(0deg) translateY(-10px);
            box-shadow: 0 40px 80px rgba(0,0,0,0.4), 0 0 60px var(--neon-glow);
        }

        /* --- General Section Styling --- */
        .section {
            padding: 90px 0;
            position: relative;
        }

        .section-title {
            font-size: 2.8rem;
            font-weight: 800;
            color: var(--cava-green);
            margin-bottom: 25px;
            position: relative;
            display: inline-block;
            letter-spacing: -0.5px;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 80px;
            height: 6px;
            background: linear-gradient(90deg, var(--cava-orange), #ff8c4a);
            border-radius: 4px;
            box-shadow: 0 4px 10px rgba(240, 101, 34, 0.3);
        }

        .section-desc {
            font-size: 1.25rem;
            color: var(--cava-light-grey);
            max-width: 850px;
            margin-bottom: 50px;
            line-height: 1.8;
        }

        /* --- Glassmorphism Content Blocks --- */
        .content-box {
            background: var(--glass-bg);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            padding: 50px;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255,255,255,0.8);
            margin-bottom: 40px;
            border: 1px solid var(--glass-border);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .content-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,1);
        }

        .content-box p {
            font-size: 1.15rem;
            margin-bottom: 1.8rem;
            color: #4a4a4a;
        }
        
        .content-box p:last-child {
            margin-bottom: 0;
        }

        .content-box strong {
            color: var(--cava-green);
            font-weight: 700;
            background: rgba(27, 59, 43, 0.05);
            padding: 2px 6px;
            border-radius: 4px;
        }

        /* --- Modern Table with Glassmorphism --- */
        .table-wrapper {
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            overflow-x: auto;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255,255,255,0.6);
            border: 1px solid var(--glass-border);
            margin-bottom: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            min-width: 750px;
        }

        th, td {
            padding: 22px 28px;
            border-bottom: 1px solid var(--border-color);
        }

        th {
            background-color: rgba(255,255,255,0.8);
            color: var(--cava-green);
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 1.15rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        tr:last-child td {
            border-bottom: none;
        }

        tbody tr {
            transition: background 0.3s ease, transform 0.2s ease;
        }

        tbody tr:hover {
            background-color: rgba(255, 255, 255, 0.9);
            transform: scale(1.01);
            box-shadow: 0 5px 15px rgba(0,0,0,0.03);
            position: relative;
            z-index: 10;
        }

        td {
            font-size: 1.1rem;
            color: #555;
        }

        td:first-child {
            font-weight: 700;
            color: var(--cava-green);
        }

        .price-badge {
            background: linear-gradient(135deg, var(--cava-orange) 0%, #ff8c4a 100%);
            color: var(--white);
            padding: 6px 14px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(240, 101, 34, 0.3);
            display: inline-block;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        tbody tr:hover .price-badge {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(240, 101, 34, 0.5);
        }

        /* --- Premium Signature Bowls Grid --- */
        .bowls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            gap: 35px;
            margin-top: 30px;
        }

        .bowl-card {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 24px;
            border: 1px solid var(--glass-border);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        .bowl-card::after {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 100%);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s;
        }

        .bowl-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12), 0 0 20px rgba(240, 101, 34, 0.15);
            border-color: rgba(255,255,255,0.9);
        }

        .bowl-card:hover::after {
            opacity: 1;
        }
        
        .bowl-card-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            transition: transform 0.6s ease;
        }

        .bowl-card:hover .bowl-card-image {
            transform: scale(1.05);
        }
        
        .bowl-card-content {
            padding: 35px 30px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            background: rgba(255,255,255,0.4);
            position: relative;
            z-index: 10;
        }

        .bowl-card h3 {
            font-size: 1.7rem;
            color: var(--cava-green);
            margin-bottom: 18px;
            line-height: 1.3;
        }

        .bowl-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 22px;
        }

        .stat-pill {
            background: rgba(255,255,255,0.8);
            color: var(--cava-dark-grey);
            padding: 8px 14px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 700;
            border: 1px solid var(--border-color);
            box-shadow: 0 2px 8px rgba(0,0,0,0.02);
            transition: all 0.3s ease;
        }
        
        .bowl-card:hover .stat-pill {
            background: var(--white);
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .stat-pill.stat-price {
            background: var(--cava-green);
            color: var(--white);
            border-color: var(--cava-green);
            box-shadow: 0 4px 10px rgba(27, 59, 43, 0.3);
        }

        .bowl-card p {
            color: #5a5a5a;
            font-size: 1.1rem;
            margin-top: auto;
            line-height: 1.6;
        }

        .best-for {
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px dashed rgba(0,0,0,0.1);
            font-size: 1rem;
            color: var(--cava-orange);
            font-weight: 700;
            display: flex;
            align-items: center;
        }

        .best-for::before {
            content: '⭐';
            margin-right: 8px;
            font-size: 1.1rem;
        }

        /* --- Steps Layout (Premium) --- */
        .steps-wrapper {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border-radius: 30px;
            padding: 60px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--glass-border);
            position: relative;
        }

        .step-row {
            display: flex;
            align-items: flex-start;
            margin-bottom: 50px;
            padding: 30px;
            border-radius: 20px;
            transition: background 0.3s ease, transform 0.3s ease;
        }

        .step-row:hover {
            background: rgba(255,255,255,0.7);
            transform: translateX(10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

        .step-row:last-child {
            margin-bottom: 0;
        }

        .step-number {
            flex-shrink: 0;
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, var(--cava-orange) 0%, #ff8c4a 100%);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: 800;
            font-family: 'Outfit', sans-serif;
            margin-right: 35px;
            box-shadow: 0 10px 20px rgba(240, 101, 34, 0.4);
            position: relative;
            z-index: 2;
        }

        .step-row:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 65px;
            top: 100px;
            bottom: -50px;
            width: 2px;
            background: dashed 2px var(--cava-orange);
            opacity: 0.3;
            z-index: 1;
        }

        .step-content h3 {
            font-size: 1.7rem;
            color: var(--cava-green);
            margin-bottom: 15px;
            margin-top: 5px;
        }

        .step-content p {
            color: #5a5a5a;
            font-size: 1.15rem;
            line-height: 1.7;
        }

        .pro-tip {
            background: linear-gradient(to right, rgba(27, 59, 43, 0.05), transparent);
            border-left: 5px solid var(--cava-green);
            padding: 25px 30px;
            border-radius: 0 16px 16px 0;
            margin-top: 45px;
            position: relative;
            overflow: hidden;
        }
        
        .pro-tip h4 {
            color: var(--cava-green);
            margin-bottom: 10px;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
        }

        .pro-tip h4::before {
            content: '💡';
            margin-right: 10px;
            font-size: 1.5rem;
        }

        /* --- FAQ Accordion (Dynamic) --- */
        .faq-container {
            max-width: 900px;
            margin: 0 auto;
        }

        details {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            margin-bottom: 20px;
            border-radius: 16px;
            border: 1px solid var(--glass-border);
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 5px 15px rgba(0,0,0,0.02);
        }

        details[open] {
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            border-color: var(--cava-orange);
            background: rgba(255,255,255,0.9);
            transform: scale(1.02);
        }

        summary {
            padding: 30px;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 1.3rem;
            color: var(--cava-green);
            cursor: pointer;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: color 0.3s;
        }

        summary:hover {
            color: var(--cava-orange);
        }

        summary::-webkit-details-marker {
            display: none;
        }

        summary::after {
            content: '+';
            color: var(--cava-orange);
            font-size: 2rem;
            font-weight: 300;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(240, 101, 34, 0.1);
            width: 40px; height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        details[open] summary::after {
            content: '−';
            transform: rotate(180deg);
            background: var(--cava-orange);
            color: white;
        }

        .faq-answer {
            padding: 0 30px 30px 30px;
            color: #555;
            font-size: 1.15rem;
            line-height: 1.8;
            animation: slideDown 0.4s ease-out;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- Footer --- */
        footer {
            background: linear-gradient(135deg, #0d1e15 0%, var(--cava-green) 100%);
            padding: 100px 20px 40px;
            margin-top: 100px;
            color: var(--white);
            position: relative;
            overflow: hidden;
        }

        footer::before {
            content: '';
            position: absolute;
            top: -150px; left: 50%;
            transform: translateX(-50%);
            width: 800px; height: 300px;
            background: radial-gradient(ellipse, rgba(240, 101, 34, 0.15) 0%, transparent 70%);
            pointer-events: none;
        }

        .footer-content {
            max-width: 850px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 10;
        }

        .footer-content h2 {
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: var(--white);
        }

        .footer-content p {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.8);
            margin-bottom: 50px;
            line-height: 1.8;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 40px;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 1rem;
            color: rgba(255,255,255,0.4);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.8rem; }
            .hero { padding: 100px 20px 60px; }
            .section-title { font-size: 2.2rem; }
            .content-box { padding: 30px; }
            .steps-wrapper { padding: 40px 25px; }
            .step-row { flex-direction: column; align-items: center; text-align: center; }
            .step-number { margin-right: 0; margin-bottom: 25px; }
            .step-row:not(:last-child)::after { display: none; }
            .hero-image-container { margin-top: -30px; }
            .bowls-grid { grid-template-columns: 1fr; }
        }
"@

$new_content = $content -replace '(?s)<style>.*?</style>', "<style>`n$new_css`n    </style>"
Set-Content -Path $filepath -Value $new_content -Encoding UTF8
Write-Host "Updated successfully"
