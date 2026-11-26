Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $projectRoot 'src\assets\img01.jpg'
$outputPath = Join-Path $projectRoot 'public\social-share.png'

$canvas = New-Object System.Drawing.Bitmap 1200, 630
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$background = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#efeae2'))
$ink = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#111111'))
$muted = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#56514a'))
$accent = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#f6c800'))
$white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)

$graphics.FillRectangle($background, 0, 0, 1200, 630)

$photo = [System.Drawing.Image]::FromFile($sourcePath)
$source = New-Object System.Drawing.Rectangle 145, 0, 723, 844
$destination = New-Object System.Drawing.Rectangle 660, 0, 540, 630
$graphics.DrawImage($photo, $destination, $source, [System.Drawing.GraphicsUnit]::Pixel)
$graphics.FillRectangle($accent, 635, 0, 25, 630)

$brandFont = New-Object System.Drawing.Font 'Arial', 42, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$titleFont = New-Object System.Drawing.Font 'Arial', 56, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$bodyFont = New-Object System.Drawing.Font 'Arial', 25, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)
$businessFont = New-Object System.Drawing.Font 'Arial', 18, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)

$graphics.DrawString('Apron', $brandFont, $ink, 64, 58)
$graphics.FillRectangle($accent, 64, 123, 74, 8)

$titleBox = New-Object System.Drawing.RectangleF 60, 173, 520, 200
$graphics.DrawString('Watch your salon work. From anywhere.', $titleFont, $ink, $titleBox)

$bodyBox = New-Object System.Drawing.RectangleF 64, 405, 520, 84
$graphics.DrawString('Sales, discounts and bill edits delivered on WhatsApp.', $bodyFont, $muted, $bodyBox)

$graphics.DrawString('Paltribe Solutions Private Limited', $businessFont, $ink, 64, 548)
$graphics.DrawString('+91 77026 05494', $businessFont, $muted, 64, 578)

$canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$brandFont.Dispose()
$titleFont.Dispose()
$bodyFont.Dispose()
$businessFont.Dispose()
$photo.Dispose()
$background.Dispose()
$ink.Dispose()
$muted.Dispose()
$accent.Dispose()
$white.Dispose()
$graphics.Dispose()
$canvas.Dispose()

Write-Output $outputPath
