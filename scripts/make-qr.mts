// usage: node scripts/make-qr.mts https://your.site   -> qr/print.html (one A4 page per location)
import { mkdirSync, writeFileSync } from 'node:fs'
import QRCode from 'qrcode'
import { LOCATIONS } from '../content/case.ts'

const site = (process.argv[2] || '').replace(/\/$/, '')
if (!site) {
  console.log('need the site url, e.g. node scripts/make-qr.mts https://hoodunnit-enroot-g8.vercel.app')
  process.exit(1)
}

const pages = await Promise.all(LOCATIONS.map(async l => {
  const url = `${site}/c/${l.slug}`
  const svg = await QRCode.toString(url, { type: 'svg', errorCorrectionLevel: 'H', margin: 2, color: { dark: '#000000', light: '#ffffff' } })
  return `<section class="page">
  <h1>Hoo<span>DUNNIT</span>?</h1>
  <p class="sub">EnROOT Group 8 &middot; murder mystery treasure hunt</p>
  <div class="qr">${svg}</div>
  <p class="loc">you found: <b>${l.name}</b></p>
  <p class="scan">scan for evidence + your letter</p>
  <p class="url">or type: ${url.replace(/^https?:\/\//, '')}</p>
</section>`
}))

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>HooDunnit QR posters</title>
<style>
@page { size: A4; margin: 0 }
* { box-sizing: border-box; margin: 0 }
body { font-family: 'Courier New', monospace; background: #fff }
.page { width: 595px; height: 842px; padding: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; page-break-after: always; break-after: page; border: 18px solid #b3152e }
h1 { font-family: Impact, 'Arial Narrow', sans-serif; font-size: 54px; color: #b3152e; letter-spacing: -1pt }
h1 span { color: #000 }
.sub { font-size: 14px }
.qr { width: 400px; height: 400px }
.qr svg { width: 100%; height: 100% }
.loc { font-size: 22px }
.scan { font-size: 17px; color: #b3152e }
.url { font-size: 13px; color: #555 }
</style></head><body>
${pages.join('\n')}
</body></html>`

mkdirSync('qr', { recursive: true })
writeFileSync('qr/print.html', html)
console.log(`wrote qr/print.html with ${pages.length} pages for ${site}`)
