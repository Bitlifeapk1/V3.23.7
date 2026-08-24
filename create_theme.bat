@echo off
set "DEST=c:\Users\786\Desktop\Cava menu\cava-menu-guide"
set "SRC=c:\Users\786\Desktop\Cava menu"

echo Creating directories...
mkdir "%DEST%"
mkdir "%DEST%\assets"
mkdir "%DEST%\assets\css"
mkdir "%DEST%\assets\js"
mkdir "%DEST%\assets\img"

echo Copying images...
xcopy /E /I /Y "%SRC%\img" "%DEST%\assets\img"

echo Copying CSS...
copy /Y "%SRC%\style.css" "%DEST%\assets\css\cava.css"

echo Copying JS...
copy /Y "%SRC%\js\data.js" "%DEST%\assets\js\data.js"
copy /Y "%SRC%\js\app.js" "%DEST%\assets\js\app.js"

echo Done!
