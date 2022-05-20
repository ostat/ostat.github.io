---
layout: default
title: Powershell Logging
parent: PowerShell
---

# Directory listing
In windows 10 the the consoles support VT (Virtual Terminal) which allows for control of the output steam via control characters.
https://docs.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences

The control commands use an ESC which is represented as `0x1B` in PowerShell this can be represented as `$e = [char]27`.
```powershell
$e = [char]27
Write-Host "${e}[93mThe quick ${e}[91mbrown fox ${e}[92mjumps over ${e}[94mthe lazy ${e}[37mdog. "
```

![](../../assets/ConsoleVTSample.png)

## Virtual Terminal in windows consoles
Not all consoles support VT(I.E, PowerShell ISE), and with the controls being part of the output steam if the console does not support them they will appear in the output.

To solve this we can detect the console mode, and then use regexp to remove the control chars if needed.

```powershell
function IsConsoleVirtualTerminalEnabled()
{
$MethodDefinitions = @'
[DllImport("kernel32.dll", SetLastError = true)]
public static extern IntPtr GetStdHandle(int nStdHandle);
[DllImport("kernel32.dll", SetLastError = true)]
public static extern bool GetConsoleMode(IntPtr hConsoleHandle, out uint lpMode);
'@
    $Kernel32 = Add-Type -MemberDefinition $MethodDefinitions -Name 'Kernel32' -Namespace 'Win32' -PassThru

    $hConsoleHandle = $Kernel32::GetStdHandle(-11) # STD_OUTPUT_HANDLE 
    $mode = 0
    return $Kernel32::GetConsoleMode($hConsoleHandle, [ref]$mode)
}

function Write-HostFormatted($message)
{
    if(IsConsoleVirtualTerminalEnabled)
    {
        Write-Host $message
    }
    else
    {
        #Remove Cosole Virtual Terminal formatting
        Write-Host ($message -replace "${$e}\[\d*m", "")
    } 
}
```

## Script Parameter and execution logging
Logging script execution, its parameters and some of the important host details. Specifically useful when script is being executed by some scheduled task on a remote server when using the log to debug issues.
```powershell
function Write-ScriptExecutionInfo($Invocation) {
    $e = [char]27
    Write-Host "$(Get-Date -format 'yyyy-MM-dd_HH:mm:ss.ffff')"
 
    Write-HostFormatted "Starting Invocation ${e}[93m$($Invocation.InvocationName)${e}[0m"
    Write-HostFormatted "`t${e}[33mScriptVersion${e}[0m: ${e}[32m$script:Version${e}[0m"
   
    Write-HostFormatted "`t${e}[33mLocationPath${e}[0m: ${e}[32m$((Get-Location).Path)${e}[0m"
    Write-HostFormatted "`t${e}[33mPowerShell${e}[0m: ${e}[32m$($Host.Version) $(if ([System.IntPtr]::Size -eq 4) { "32-bit" } else { "64-bit" }) ${e}[33msyswow64${e}[0m: ${e}[32m$(if (([diagnostics.process]::GetCurrentProcess()).path -match '\\syswow64\\') { "true" } else { "false" })${e}[0m"
    Write-HostFormatted "`t${e}[33mUser${e}[0m: ${e}[32m$($env:username) $(if ((New-Object Security.Principal.WindowsPrincipal ([Security.Principal.WindowsIdentity]::GetCurrent())).IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)) { "Elevated" } else { "Not Elevated" })${e}[0m" 
   
    Write-FunctionExecutionInfo($Invocation)
}
 
function Write-FunctionExecutionInfo($Invocation) {
    $e = [char]27
    Write-HostFormatted "$(Get-Date -format 'yyyy-MM-dd_HH:mm:ss.ffff') ${e}[93m$($Invocation.InvocationName)${e}[0m"
    Write-Host 'Passed in parameters:'
    foreach($ps in  $Invocation.BoundParameters.GetEnumerator())
    {
        Write-HostFormatted "`t${e}[33m$($ps.Key)${e}[0m:'${e}[32m$($ps.Value)${e}[0m'"      
    }
}
```

## Execution 
Above functions would be executed like so.
```powershell
function DoWork([String] $path)
{
    #log for the function execution
    Write-FunctionExecutionInfo -Invocation (Get-Variable MyInvocation).Value
}

#log for the script execution
Write-ScriptExecutionInfo -Invocation (Get-Variable MyInvocation).Value

DoWork -path 'C:\test\'
}
```