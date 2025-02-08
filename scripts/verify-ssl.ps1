# Forcer l'encodage UTF-8
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
$OutputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)

# Configuration de l'encodage UTF-8 sans BOM
$PSDefaultParameterValues['*:Encoding'] = 'utf8'
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)

Import-Module "$PSScriptRoot\Utf8Helpers.psm1" -Force

$opensslPaths = @(
    "C:\Program Files\OpenSSL-Win64\bin\openssl.exe",
    "C:\Program Files (x86)\OpenSSL-Win32\bin\openssl.exe"
)

$opensslPath = $null
foreach ($path in $opensslPaths) {
    if (Test-Path $path) {
        $opensslPath = $path
        break
    }
}

if ($null -eq $opensslPath) {
    Write-Error "OpenSSL non trouvé. Veuillez l'installer."
    exit 1
}

Write-UTF8Message "OpenSSL trouvé: $opensslPath"
$version = & $opensslPath version
Write-UTF8Message "OpenSSL version: $version"
Write-UTF8Message "Configuration OpenSSL réussie!"
