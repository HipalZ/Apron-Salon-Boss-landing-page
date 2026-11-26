Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$publicPath = Join-Path $projectRoot 'public'

function New-ApronIcon {
  param(
    [int]$Size,
    [string]$OutputPath
  )

  $bitmap = New-Object System.Drawing.Bitmap $Size, $Size
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#f6c800'))

  $fontSize = [float]($Size * 0.64)
  $font = New-Object System.Drawing.Font 'Arial', $fontSize, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
  $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#111111'))
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $bounds = New-Object System.Drawing.RectangleF 0, 0, $Size, $Size
  $graphics.DrawString('A', $font, $brush, $bounds, $format)

  $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $format.Dispose()
  $brush.Dispose()
  $font.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

New-ApronIcon -Size 32 -OutputPath (Join-Path $publicPath 'favicon-32x32.png')
New-ApronIcon -Size 180 -OutputPath (Join-Path $publicPath 'apple-touch-icon.png')
New-ApronIcon -Size 192 -OutputPath (Join-Path $publicPath 'icon-192.png')
New-ApronIcon -Size 512 -OutputPath (Join-Path $publicPath 'icon-512.png')

$faviconBitmap = New-Object System.Drawing.Bitmap (Join-Path $publicPath 'favicon-32x32.png')
$faviconIcon = [System.Drawing.Icon]::FromHandle($faviconBitmap.GetHicon())
$faviconStream = [System.IO.File]::Create((Join-Path $publicPath 'favicon.ico'))
$faviconIcon.Save($faviconStream)
$faviconStream.Dispose()
$faviconIcon.Dispose()
$faviconBitmap.Dispose()
