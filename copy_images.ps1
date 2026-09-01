$srcDir = "C:\Users\786\.gemini\antigravity-ide\brain\341c74d8-86ea-439f-871c-c862bf6f4898"
$dstDir = "c:\Users\786\Desktop\Cava menu\images"

if (!(Test-Path -Path $dstDir)) {
    New-Item -ItemType Directory -Path $dstDir
}

Get-ChildItem -Path $srcDir -Filter "cava_chicken_rice_bowl_*.jpg" | Select-Object -First 1 | Copy-Item -Destination "$dstDir\chicken_bowl.jpg" -Force
Get-ChildItem -Path $srcDir -Filter "cava_spicy_lamb_bowl_*.jpg" | Select-Object -First 1 | Copy-Item -Destination "$dstDir\lamb_bowl.jpg" -Force
Get-ChildItem -Path $srcDir -Filter "cava_salmon_bowl_*.jpg" | Select-Object -First 1 | Copy-Item -Destination "$dstDir\salmon_bowl.jpg" -Force
Get-ChildItem -Path $srcDir -Filter "cava_falafel_bowl_*.jpg" | Select-Object -First 1 | Copy-Item -Destination "$dstDir\falafel_bowl.jpg" -Force
