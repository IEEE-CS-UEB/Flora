$PhTempCSS = Invoke-WebRequest 'https://api.iconify.design/ph.css?icons=user-circle-light,eyeglasses&iconSelector=.Icon.{name}'
$PhCSS = ($PhTempCSS.Content -split "`n")[11..($PhTempCSS.Content.Length)] -join "`n"
Set-Content -Path "./src/ph.css" -Value $PhCSS