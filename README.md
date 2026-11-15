# HooDunnit?

site + telegram bot for **HooDunnit?**, EnROOT group 8's murder mystery treasure hunt.
mon 23 nov 2026, 5pm to 6:30pm, ROOT Cove.

people get a clue card, walk to 5 places around SUTD and scan a QR code at each one. every QR page has a bit of
evidence, a fun fact and one letter. the 5 letters unscramble into the culprit's name, which goes in the google form.

## pages

- `/` the case, how to play, prizes
- `/c/<slug>` the 5 QR pages. slugs are random so you can't skip ahead by typing `/c/5`
- `/suspects`, `/notebook`, `/making-of`
- `/api/telegram` webhook for [@HooDunnitBot](https://t.me/HooDunnitBot)

letters you've found are kept in `localStorage`, nothing gets sent anywhere.

## editing the story

everything (story, suspects, clues, fun facts, letters, riddles, form link) is in [`content/case.ts`](content/case.ts).
the bot reads the same file so they can't disagree.

- fun facts with `factVerified: false` are hidden on the site until someone checks them on campus
- put the google form link in `FORM_URL` and the accuse button shows up
- **don't change the slugs** once the QR posters are printed

## running it

```sh
pnpm i
pnpm dev
```

## deploying

import the repo on vercel, then add these env vars:

| name | what |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | from @BotFather |
| `TELEGRAM_WEBHOOK_SECRET` | any random string, `A-Z a-z 0-9 _ -` |
| `SITE_URL` | e.g. `https://hoodunnit-enroot-g8.vercel.app` |

then point telegram at it:

```sh
TELEGRAM_BOT_TOKEN=... TELEGRAM_WEBHOOK_SECRET=... pnpm webhook https://hoodunnit-enroot-g8.vercel.app
```

## QR posters

```sh
pnpm qr https://hoodunnit-enroot-g8.vercel.app   # -> qr/print.html, one A4 page per location
```

open `qr/print.html` and print, or turn it into a pdf. print 2 of each in case one gets ripped down.
