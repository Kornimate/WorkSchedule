$date = (Get-Date).ToString('yyyy.MM.dd')
$data = "export const LastUpdateTime = `"$date`";" | Set-Content -Path ./src/models/UpdateTime.js
git add ./src/models/UpdateTime.js
git commit -m "updated time"
git push
Write-Host "Update Time changed"
Write-Host "Starting deploy process..."
npm run deploy