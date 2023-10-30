---
layout: default
title: Archive files
parent: PowerShell
---

# Archive files
Archive a list of files using powershell. Main criteria is speed, intending to compress folder that contain 100,000 or 1,000,000 of files.

## Archive files using Compress-Archive with a list of files
Using PowerShell's builtin Compress-Archive using the pipe.
```powershell
Get-ChildItem -Path $sourceFolder | Compress-Archive -DestinationPath $targetArchive
```

## Archive files using Compress-Archive with a list of files
Using PowerShell's builtin `Compress-Archive` to archive a list of files.
```powershell
$compress = @{
    LiteralPath = [IO.Directory]::EnumerateFiles($sourceFolder)
    CompressionLevel = "Fastest"
    DestinationPath = $targetArchive
}

Compress-Archive @compress
```

## Archive files using System.IO.Compression CreateFromDirectory
Using the .net System.IO.Compression.ZipFile.CreateEntryFromFile(). Adds each file separately, but does not close the zip till the end. Using IO.Directory.EnumerateFiles to get list of files, as this appears to be the fastest approach.
```powershell
Add-Type -AssemblyName System.IO.Compression.FileSystem
$CompressionLevel = [System.IO.Compression.CompressionLevel]::'Optimal'
$Mode = [System.IO.Compression.ZipArchiveMode]::Create 
$zip = [System.IO.Compression.ZipFile]::Open($targetArchive, $Mode)

[IO.Directory]::EnumerateFiles($sourceFolder) | ForEach-Object {
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_, [System.IO.Path]::GetFileName($_), $CompressionLevel)
}

$zip.Dispose();
```

## Archive directory using System.IO.Compression CreateFromDirectory
Using the .net System.IO.Compression.ZipFile.CreateFromDirectory(). Can only compress a folder, not a select list of files.
```powershell
$CompressionLevel = [System.IO.Compression.CompressionLevel]::'Optimal'
[System.IO.Compression.ZipFile]::CreateFromDirectory($sourceFolder, $targetArchive, $CompressionLevel, $false)
```

## Archive files using 7Zip4Powershell
Using (7Zip4Powershell)[https://github.com/thoemmi/7Zip4Powershell], which uses 7zip. This suffers from closing the zip after each file, adding two files writes the zip twice.
```powershell
if(-not(get-module -name 7Zip4Powershell -ea:silentlycontinue)){import-module 7Zip4Powershell}
[IO.Directory]::EnumerateFiles($sourceFolder) | ForEach-Object {
    if(Test-Path $targetArchive)
    {
        Compress-7Zip -CompressionLevel 'Ultra' -Format 'Zip'  -ArchiveFileName $targetArchive -Path $_ -Append | Out-Null
    }
    else
    {
        Compress-7Zip -CompressionLevel 'Ultra' -Format 'Zip' -ArchiveFileName $targetArchive -Path $_ | Out-Null
    }
}
```

## Archive directory using Pscx Write-Zip
Using PSCX[https://github.com/Pscx/Pscx], When tested there was an error with appending, had to add the source folder. 
```powershell
if(-not(get-module -name pscx -ea:silentlycontinue)){import-module pscx}
    #[IO.Directory]::EnumerateFiles($sourceFolder) | ForEach-Object {
    if(Test-Path $targetArchive)
    {
        # There is a bug in Write-Zip -Append
        # SharpZipLib: "Extra data extended Zip64 information length is invalid"
        throw 'Archive already exists, aborting'
    }
    else
    {   
        Get-ChildItem $sourceFolder | Write-Zip -IncludeEmptyDirectories -Level 9 -OutputPath "$targetArchive" -EntryPathRoot $sourceFolder
    }
```

## Results
The tests were run using randomly generated files that each contained 100 random GUIDs.

Results for 1000 files
```
CompressArchivePipe:    00:00:01.8465544 size:3.1 MB
CompressArchive:        00:00:01.5638973 size:3.1 MB
SystemIO ZipDirectory:  00:00:00.5484307 size:3.1 MB
SystemIO ZipFiles:      00:00:00.5789766 size:3.1 MB
7Zip4Powershell:        00:01:53.2336641 size:2.9 MB
PscxWriteZip:           00:00:01.4106449 size:3.1 MB
```

Results for 10000 files
```
CompressArchivePipe:    00:00:30.4606795 size:30.6 MB
CompressArchive:        00:00:24.5795881 size:31.4 MB
SystemIO ZipDirectory:  00:00:05.5481622 size:30.6 MB
SystemIO ZipFiles:      00:00:05.7538935 size:30.6 MB
7Zip4Powershell:        00:48:59.5511709 size:29.4 MB
PscxWriteZip:           00:00:14.0603716 size:30.8 MB
```

Both PSCX and 7Zip require third party tools to function.
Performance wise the biggest impact is to ensure that the solution does not open and close the archive for each file added.
Using .net System.IO proves to be the fastest approach, its compression rate is comparable to the others. 