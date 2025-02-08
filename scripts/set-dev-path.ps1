$projectPath = "C:\Users\morcr\OneDrive\Bureau\Contable App\contableapp2"

# Créer un alias pour le chemin du projet
Set-Location -Path $projectPath

# Créer des alias utiles
Set-Alias -Name dev -Value "npm run dev"
Set-Alias -Name build -Value "npm run build"
Set-Alias -Name clean -Value "npm run clean"

Write-Host "Environment de développement configuré!"
Write-Host "Emplacement actuel: $projectPath"
Write-Host "Commandes disponibles: dev, build, clean"
