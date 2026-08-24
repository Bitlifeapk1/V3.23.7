$dataFile = "c:\Users\786\Desktop\Cava menu\cava-menu-guide\assets\js\data.js"
$appFile = "c:\Users\786\Desktop\Cava menu\cava-menu-guide\assets\js\app.js"

$dataContent = Get-Content $dataFile -Raw -Encoding UTF8
$dataContent = $dataContent.Replace('"img/', '(typeof cavaWpData !== "undefined" ? cavaWpData.themeUrl + "/assets/img/" : "img/')
Set-Content -Path $dataFile -Value $dataContent -Encoding UTF8

$appContent = Get-Content $appFile -Raw -Encoding UTF8
$appContent = $appContent.Replace('src="img/', 'src="'' + (typeof cavaWpData !== "undefined" ? cavaWpData.themeUrl + "/assets/img/" : "img/") + ''')
Set-Content -Path $appFile -Value $appContent -Encoding UTF8

Write-Host "JS files updated."
