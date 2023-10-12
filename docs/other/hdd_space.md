---
layout: default
title: HDD Space Clean up
parent: Other
---


# Saving HDD Space
Some places to save HDD space.

---

# Windows search
Windows search data is stored locally in a database. This can be deleted.
To delete the database you will need to stop the windows service `stop-service 'Windows Search'`.
- Path in Registry `Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows Search\Databases\Windows').FileName`
- Before windows 7 `'C:\Documents and Settings\Application Data\All Users\Microsoft\Search\Data\Applications\Windows\Windows.edb'`
- Windows 7 and up `Join-Path $Env:ProgramData '\Microsoft\Search\Data\Applications\Windows\Windows.edb'`

# Recycling bin
Empty the recycling bin
```
$Recycler = (New-Object -ComObject Shell.Application).NameSpace(0xa)
$Recycler.items() | foreach { rm $_.path -force -recurse }
```
# Disabled hibernation
If you don't use Hibernation, it can be disabled. 
Disable Hibernation Command `&powercfg -h off`

# Patch Cache
This `Join-Path $Env:windir '\Installer\$PatchCache$\Managed'`
http://blogs.msdn.com/b/heaths/archive/2007/01/17/the-patch-cache-and-freeing-space.aspx


# Winsxs, Windows 8+
`&C:\WINDOWS\SYSNATIVE\DISM.EXE /online /Cleanup-Image /StartComponentCleanup`

# Windows update log
Windows CBS logs.

# Resharper Cache
`'C:\Users\[foreach]\AppData\Local\JetBrains\Transient\'`
This folder can be moved to another drive https://www.jetbrains.com/help/resharper/2016.3/Configuring_Caches_Location.html

# nuget cache
Nuget cache can fill up with old versions of files. These can be removed.
`&$nugetPath locals -clear all`

---
# Folders
Folder that contains files that can be considered for deletion.
- \*\: Any folder
- \[***]\: Any folder recursive

## Temp Folders
    'C:\Windows\Temp\*'
    'C:\Documents and Settings\*\Local Settings\temp\*'
    'C:\Users\*\Appdata\Local\Temp\*'

## Windows folders
    'C:\Windows\Prefetch\*'
    'C:\Windows\SoftwareDistribution\*'

## Windows logs
    'C:\Windows\[***]\*.log'

## Dump files
    'C:\Windows\*.dmp'
    'C:\Users\*\AppData\Local\CrashDumps\*.dmp'

## Browser temp files
### IE, temp internet folders   
    'C:\users\*\AppData\Local\Microsoft\Windows\Temporary Internet Files\*'
    'C:\users\*\AppData\Local\Microsoft\Windows\WER\*'

### Chrome, temp internet folders
    'C:\users\*\AppData\Local\Google\Chrome\User Data\Default\Cache\*'
    'C:\users\*\AppData\Local\Google\Chrome\User Data\Default\Cache2\entries\*'
    'C:\users\*\AppData\Local\Google\Chrome\User Data\Default\Media Cache\*'

### Firefox
    'C:\users\*\AppData\Local\Mozilla\Firefox\Profiles\*.default-*\cache\*'
    'C:\users\*\AppData\Local\Mozilla\Firefox\Profiles\*.default-*\cache\*.*'
    'C:\users\*\AppData\Local\Mozilla\Firefox\Profiles\*.default-*\Cache2\entries\*'

### Cleans IIS Logs.
    'C:\inetpub\logs\LogFiles\*'

# .net workspace
.net projects can create a lot of temp files.
- [workspaces] Path to your base workspace folder
## Workspace TestResults
    "[workspaces]\***\TestResults\*"

## workspace Bin folders, you would need to rebuild after doing this.
    '[workspaces]\[***]\Bin\*'

## workspace Obj folders, you would need to rebuild after doing this.
    '[workspaces]\[***]\obj\*'

## Resharper cache folders
    'C:\Users\*\AppData\Local\JetBrains\Transient\*\*\SolutionCaches\*'
    'C:\Users\*\AppData\Local\JetBrains\Transient\'

# Nuget folders
    'C:\Users\*\AppData\Local\NuGet\*'
    'C:\Users\*\AppData\Local\dnu\*'
    'C:\Users\*\.nuget\*'

# Adobie install files
    'C:\ProgramData\Adobe\Setup\*'