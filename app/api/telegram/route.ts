import { Update } from '@grammyjs/types'
import { reply } from '@/lib/hoot'
import { sendTelegramMessage } from '@/lib/telegram'

export async function POST(req: Request) {
  const { TELEGRAM_WEBHOOK_SECRET } = process.env
  const secret = req.headers.get('x-telegram-bot-api-secret-token')
  if (!TELEGRAM_WEBHOOK_SECRET || secret !== TELEGRAM_WEBHOOK_SECRET) return new Response('nope', { status: 401 })

  const { message }: Update = await req.json()
  const text = message?.text
  if (!text) return Response.json({ ok: true })

  await sendTelegramMessage(message.chat.id, reply(text))
  return Response.json({ ok: true })
}
