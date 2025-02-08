
Write-Host "Nettoyage du cache..."
if (Test-Path ".next") {
    Remove-Item ".next" -Recurse -Force
}
if (Test-Path "node_modules/.cache") {
    Remove-Item "node_modules/.cache" -Recurse -Force
}
Write-Host "Cache nettoyé!"