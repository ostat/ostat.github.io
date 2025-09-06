# Running app always as admin

Create a new string value in one of these existing keys: (create the "Layers" key also - if necessary)

**(for current account only)**
`HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers`
**(for all users)**
`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers`

The name of the new string value should be the path **(without quotes)** to the application you want to always launch elevated.

For example:
`C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\devenv.exe`
The value of this key should be
`~ RUNASADMIN`
