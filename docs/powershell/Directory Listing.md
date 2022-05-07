---
layout: default
title: Directory listing
nav_order: 3
has_children: true
permalink: /docs/Powershell/Directory listing
---

# Directory listing

Listing files from a folder. Depending on the approach different performance will be obtained. This can be important when working with folders that contains 100,000 or millions of files.

## Enumerating files using Get-ChildItem
Using the built in Powershell command Get-ChildItem. Gets a list of FileInfo objects.
```powershell
Get-ChildItem $sourceFolder -File | ForEach-Object {
    $alist.Add($_)
```

## Enumerating files using IO.Directory EnumerateFiles
Using the .net IO.Directory.EnumerateFiles(). Returns a list of String Paths.
```powershell
[IO.Directory]::EnumerateFiles($sourceFolder) | ForEach-Object {
    $alist.Add($_)
}        
```

## Enumerating files using Get-ChildItem in to a list
Using the built in Powershell command Get-ChildItem, and then adding to a list. Essentually the same as just Get-ChildItem. Written to be effort compatable with the IO.Directory EnumerateFiles in to a list.
```powershell
$alist = [System.Collections.Arraylist]::New()
$blist = [System.Collections.Arraylist]::New()
Get-ChildItem $sourceFolder -File | ForEach-Object{
    $alist.Add($_)
    $blist.Add($_.Name)
}
```

## Enumerating files using IO.Directory EnumerateFiles in to a list
Using the .net IO.Directory.EnumerateFiles(). Then using the path to get the FileInfo object for each item.
```powershell
$alist = [System.Collections.Arraylist]::New()
$blist = [System.Collections.Arraylist]::New()
[IO.Directory]::EnumerateFiles($sourceFolder) | ForEach-Object {
    $item = (get-item $_)
    $alist.Add($item )
    $blist.Add($item.Name)
}
```

## Results
Results for 10000 files
```
Eneration Get-ChildItem 00:00:00.4965621 count 10000
Enumerate IO.Directory 00:00:00.0848703 count 10000
Enumerate Get-ChildItem add to list 00:00:00.5317326 count 10000
Enumerate IO.Directory with getitem 00:00:02.2512939 count 10000
```

Results for 125000 files
```
Eneration Get-ChildItem 00:00:07.3086162 count 125000
Enumerate via IO.Directory 00:00:01.3865644 count 125000
Enumerate Get-ChildItem add to list 00:00:06.8382729 count 125000
Enumeratevia IO.Directory with getitem 00:00:35.4594388 count 125000
```

IO.Directory is faster than Get-ChildItem.
Get-ChildItem however gets you a list of FileItems, which have properties such as CreatedDate, and Length. 
Using IO.Directory and then running Get-Item on each item is slower than Get-ChildItem.

If all that is needed is the file path this seems the be the fastest way to get the list.
If details from the FileInfo are needed (say grouping by date) Get-ChildItem appears faster.