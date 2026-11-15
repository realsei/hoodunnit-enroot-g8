// usage: TELEGRAM_BOT_TOKEN=... TELEGRAM_WEBHOOK_SECRET=... node scripts/set-webhook.mts https://your.site
const { TELEGRAM_BOT_TOKEN, TELEGRAM_WEBHOOK_SECRET } = process.env
const site = process.argv[2]
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_WEBHOOK_SECRET || !site) {
  console.log('need TELEGRAM_BOT_TOKEN, TELEGRAM_WEBHOOK_SECRET and a site url')
  process.exit(1)
}

const api = (method: string, body: object) =>
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then(res => res.json())

console.log(await api('setWebhook', {
  url: `${site.replace(/\/$/, '')}/api/telegram`,
  secret_token: TELEGRAM_WEBHOOK_SECRET,
  allowed_updates: ['message'],
}))

console.log(await api('setMyCommands', {
  commands: [
    { command: 'hint', description: 'a nudge if you can’t find a place' },
    { command: 'places', description: 'the five places' },
    { command: 'suspects', description: 'who was on campus that night' },
    { command: 'accuse', description: 'try your theory on hoot' },
    { command: 'help', description: 'what hoot understands' },
  ],
}))
