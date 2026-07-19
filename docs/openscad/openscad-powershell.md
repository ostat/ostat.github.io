---
layout: default
title: Running OpenSCAD from Powershell
nav_order: 1
has_children: true
parent: OpenSCAD Projects
permalink: /docs/openscad/powershell
---

# Run OpenSCAD from PowerShell

This guide shows a reliable pattern for calling OpenSCAD from PowerShell, based on a production-style script that builds command arguments dynamically.

It covers:

- Setting paths
- Building `-D` parameters safely
- Passing numeric and string values
- Running OpenSCAD with `Start-Process`

## Prerequisites

- Windows + PowerShell
- OpenSCAD installed (example path below)
- A `.scad` file you want to render

## Minimal Working Example

```powershell
$scadExePath = 'C:\Program Files\OpenSCAD\openscad.exe'
$scadScriptPath = 'C:\path\to\model.scad'
$outputPath = 'C:\path\to\output.stl'

$cmdArgs = "-o `"$outputPath`""

# Numeric parameter examples
$cmdArgs += " -D `"Diameter=50`""
$cmdArgs += " -D `"Wall_Thickness=2.4`""
$cmdArgs += " -D `"Transition_Angle=45`""

# String parameter examples (note nested quoting)
$cmdArgs += " -D `"Style=`"`"hose`"`""
$cmdArgs += " -D `"Measurement=`"outer`"`""

$cmdArgs += " $scadScriptPath"

Write-Host $cmdArgs
Start-Process $scadExePath -ArgumentList $cmdArgs -Wait
```

## Reusable Pattern (Recommended)

If you have many optional settings, use a helper function to append arguments only when a value is present.

```powershell
function AddArgs($cmdArgs, $value, $argValue) {
    if (![string]::IsNullOrEmpty($value)) {
        $cmdArgs += $argValue
    }
    return $cmdArgs
}

$scadExePath = 'C:\Program Files\OpenSCAD\openscad.exe'
$scadScriptPath = 'C:\path\to\model.scad'
$outputPath = 'C:\path\to\output.stl'

$style = 'hose'
$measurement = 'outer'
$diameter = 50
$transitionAngle = 45

$cmdArgs = "-o `"$outputPath`""

# Numbers
$cmdArgs = AddArgs $cmdArgs $diameter        " -D `"Diameter=$diameter`""
$cmdArgs = AddArgs $cmdArgs $transitionAngle " -D `"Transition_Angle=$transitionAngle`""

# Strings
$cmdArgs = AddArgs $cmdArgs $style       " -D `"Style=`"`"$style`"`""
$cmdArgs = AddArgs $cmdArgs $measurement " -D `"Measurement=`"$measurement`"`""

$cmdArgs += " $scadScriptPath"

Write-Host $cmdArgs
$executionTime = $cmdArgs | Measure-Command {
    Start-Process $scadExePath -ArgumentList $_ -Wait
}

Write-Host "Done in $executionTime"
```

## How Quoting Works

OpenSCAD expects each define in this form:

- Numeric: `-D "Diameter=50"`
- String: `-D "Style=\"hose\""`

In PowerShell string literals, backticks are used to escape quotes, which is why string parameters look like this:

```powershell
" -D `"Style=`"`"hose`"`""
```

## Common Mistakes

- Forgetting to quote string values passed to `-D`
- Not escaping quotes correctly in PowerShell strings
- Omitting `-Wait` on `Start-Process` when you need synchronous execution
- Building args in an array and then accidentally passing malformed joined text

## Optional: Include Output File Conditionally

If you want to support preview runs (without writing `.stl`), make output optional.

```powershell
$setFilePath = $true
$cmdArgs = ''

if ($setFilePath) {
    $cmdArgs = "-o `"$outputPath`""
}

$cmdArgs += " $scadScriptPath"
Start-Process $scadExePath -ArgumentList $cmdArgs -Wait
```

## Template You Can Reuse

```powershell
$scadExePath = 'C:\Program Files\OpenSCAD\openscad.exe'
$scadScriptPath = 'C:\path\to\model.scad'
$outputPath = 'C:\path\to\output.stl'

function AddArgs($cmdArgs, $value, $argValue) {
    if (![string]::IsNullOrEmpty($value)) { $cmdArgs += $argValue }
    return $cmdArgs
}

$style = 'hose'             # string
$diameter = 50              # number
$length = 40                # number

$cmdArgs = "-o `"$outputPath`""
$cmdArgs = AddArgs $cmdArgs $style    " -D `"Style=`"$style`"`""
$cmdArgs = AddArgs $cmdArgs $diameter " -D `"Diameter=$diameter`""
$cmdArgs = AddArgs $cmdArgs $length   " -D `"Length=$length`""
$cmdArgs += " $scadScriptPath"

Start-Process $scadExePath -ArgumentList $cmdArgs -Wait
```

---

If your script has many parameters, keep one `AddArgs` line per OpenSCAD variable. That makes it easy to compare PowerShell names to `.scad` variable names and quickly troubleshoot missing values.
