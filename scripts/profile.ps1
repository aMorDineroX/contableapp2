# Configuration globale de l'encodage
$OutputEncoding = [System.Text.UTF8Encoding]::new()
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
[Console]::InputEncoding = [System.Text.UTF8Encoding]::new()

# Fonction pour écrire avec le bon encodage
function Write-UTF8Output {
    param(
        [Parameter(Mandatory=$true)]
        [string]$Message
    )
    $utf8NoBOM = New-Object System.Text.UTF8Encoding $false
    [Console]::OutputEncoding = $utf8NoBOM
    [Console]::WriteLine($Message)
}

Export-ModuleMember -Function Write-UTF8Output
