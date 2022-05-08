---
layout: default
title: Create Random Files
parent: Powershell
---

# Create Random Files.md
Simple script to create random files. Used for testing performance of different archiving processes.

File name is a random guid.txt.
Files are filled with a selected number of guids.
Created date can be set from an array of day offsets.

```powershell
$workingFolder = '<path>'
$filesCount = 1000
$guidsPerFile = 100
$days = 1..356

function CreateRandomFile([string] $folder, [int] $guids, [Array] $days) 
{
    $sb = New-Object -TypeName "System.Text.StringBuilder"
    foreach($i in 1..$guids)
    {
        [void]$sb.AppendLine("$i - $([guid]::NewGuid())")
    }

    $path = (Join-Path $folder "$([guid]::NewGuid()).txt")
    $sb.ToString() | Out-File -FilePath $path 
    $ofset = (Get-Date).AddDays(-(Get-Random -InputObject $days))

    $item = Get-Item -Path $path
    $item.CreationTime = $ofset 
    $item.LastAccessTime = $ofset 
    $item.LastWriteTime = $ofset 
}

For ($i=1; $i -le $filesCount; $i++) {
    CreateRandomFile $workingFolder $guidsPerFile $days
}
```