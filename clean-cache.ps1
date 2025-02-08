# Arrêter en cas d'erreur
$ErrorActionPreference = "Stop"

# Importer le module Utf8Helpers
Import-Module "$PSScriptRoot\scripts\Utf8Helpers.psm1" -Force

# Chemin du dossier .next
$nextDir = Join-Path $PSScriptRoot ".next"
$cacheDir = Join-Path $PSScriptRoot "node_modules\.cache"

function Test-AdminRights {
    $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($identity)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Remove-FolderSafely {
    param (
        [string]$Path
    )
    
    if (Test-Path $Path) {
        Write-UTF8Message "Nettoyage du dossier $Path..."
        try {
            # Arrêter les processus Node.js
            Get-Process "node" -ErrorAction SilentlyContinue | Stop-Process -Force
            
            # Attendre que les processus soient arrêtés
            Start-Sleep -Seconds 2
            
            # Supprimer les attributs en lecture seule récursivement
            Get-ChildItem -Path $Path -Recurse -Force | 
            ForEach-Object { $_.Attributes = 'Normal' }
            
            # Supprimer le dossier
            Remove-Item -Path $Path -Recurse -Force -ErrorAction Stop
            Write-UTF8Message "Dossier $Path supprimé avec succès"
        }
        catch {
            if (-not (Test-AdminRights)) {
                Write-Host "Élévation des privilèges requise. Relancement en tant qu'administrateur..."
                Start-Process powershell -Verb RunAs -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Wait
                exit
            }
            else {
                Write-Host "Erreur critique lors de la suppression: $_"
                exit 1
            }
        }
    }
}

# Exécuter le nettoyage
Remove-FolderSafely -Path $nextDir
Remove-FolderSafely -Path $cacheDir

Write-UTF8Message "Nettoyage terminé avec succès!"