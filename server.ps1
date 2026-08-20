# ==========================================================================
# CAVA Mediterranean Menu - Local Zero-Dependency HTTP Web Server
# ==========================================================================

param (
    [int]$Port = 8080
)

$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

# Ensure images directory exists and assets are copied
$imagesDir = Join-Path $root "images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null
}

$brainDir = "C:\Users\786\.gemini\antigravity-ide\brain\385192c2-11b4-4d21-96ca-407f3bf94174"
$assetMap = @{
    "hero_bowl.jpg"        = "cava_hero_bowl_1787231702166.jpg"
    "harissa_avocado.jpg"   = "cava_harissa_avocado_1787231739656.jpg"
    "tahini_caesar.jpg"    = "cava_tahini_caesar_1787231768981.jpg"
    "pita_falafel.jpg"     = "cava_pita_sandwich_1787231814274.jpg"
    "dips_spreads.jpg"     = "cava_dips_spreads_1787231853450.jpg"
    "drinks_beverages.jpg" = "cava_drinks_beverages_1787231900377.jpg"
}

foreach ($dest in $assetMap.Keys) {
    $destPath = Join-Path $imagesDir $dest
    $srcName = $assetMap[$dest]
    $srcPath = Join-Path $brainDir $srcName
    if ((Test-Path $srcPath) -and (-not (Test-Path $destPath))) {
        Copy-Item -Path $srcPath -Destination $destPath -Force
    }
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
} catch {
    # If port is in use, fallback to 8081
    $Port = 8081
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    $listener.Start()
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  CAVA Mediterranean Menu Server is LIVE! " -ForegroundColor Yellow
Write-Host "  URL: http://localhost:$Port" -ForegroundColor Cyan
Write-Host "  Serving from: $root" -ForegroundColor Gray
Write-Host "  Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.Url.AbsolutePath
        if ($rawUrl -eq "/" -or $rawUrl -eq "") {
            $rawUrl = "/index.html"
        }

        $relPath = $rawUrl.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path $root $relPath

        # Check if file exists in root, or fallback to brainDir for images
        if (-not (Test-Path $filePath -PathType Leaf) -and $relPath.StartsWith("images")) {
            $imgName = [System.IO.Path]::GetFileName($filePath)
            if ($assetMap.ContainsKey($imgName)) {
                $filePath = Join-Path $brainDir $assetMap[$imgName]
            }
        }

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawUrl")
            $response.ContentType = "text/plain"
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.Close()
    } catch {
        # Catch cancellation or client disconnect
    }
}
