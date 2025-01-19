$date = (Get-Date).ToString('yyyy.MM.dd')
$data = "export const LastUpdateTime = `"$date`";" | Set-Content -Path ./src/models/UpdateTime.js
Write-Host "Update Time changed"
Write-Host "Starting deploy process..."
npm run deploy