export async function sendTelegramAPI(method: string, params: Record<string, unknown>) {
  const { TELEGRAM_BOT_TOKEN } = process.env
  if (!TELEGRAM_BOT_TOKEN) return

  return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })
}

export async function sendTelegramMessage(chat_id: number, text: string) {
  return sendTelegramAPI('sendMessage', { chat_id, text, parse_mode: 'HTML', link_preview_options: { is_disabled: true } })
}
