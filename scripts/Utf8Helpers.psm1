# Configuration globale de l'encodage
$OutputEncoding = [System.Text.UTF8Encoding]::new()
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
[Console]::InputEncoding = [System.Text.UTF8Encoding]::new()

function Write-UTF8Message {
    param([string]$Message)
    $utf8NoBOM = New-Object System.Text.UTF8Encoding $false
    [Console]::OutputEncoding = $utf8NoBOM
    [Console]::WriteLine($Message)
}

Export-ModuleMember -Function Write-UTF8Message
