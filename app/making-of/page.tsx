import type { Metadata } from 'next'
import Sprite from '@/components/Sprite'
import { SPRITES } from '@/components/sprites'

export const metadata: Metadata = { title: 'how this was made | HooDunnit?' }

const PALETTE = [
  { name: 'blood', hex: '#b3152e', note: 'picked straight off our poster' },
  { name: 'pitch', hex: '#000000', note: 'actual black, not “dark grey”' },
  { name: 'bone', hex: '#e9e1cf', note: 'body text, a bit yellowed like old paper' },
  { name: 'candle', hex: '#f4b740', note: 'only for flames, owl eyes and focus outlines' },
  { name: 'bruise', hex: '#2a1a2e', note: 'borders. the halloween purple, kept in the shadows' },
]

const LOG = [
  { date: '12 nov', text: 'we settled on one QR per location, each page gives a fun fact and a letter. got the poster as a reference.' },
  { date: '15 nov', text: 'read through the EPF, picked the colours off the poster, and looked at dimden.dev a lot.' },
  { date: '16 nov', text: 'locked the five QR links first so the posters could be printed while the rest got built.' },
  { date: '17 nov', text: 'drew the sprites as text grids, one character per pixel. hoot took the most tries.' },
  { date: '19 nov', text: 'telegram bot. no framework, just fetch and a switch statement.' },
]

function MakingOf() {
  return (
    <div className='flex flex-col gap-4'>
      <section className='box'>
        <h1 className='text-3xl'>how this was made</h1>
        <p className='mt-2'>
          hi, i’m max, group 8’s rootechie. this is the site for HooDunnit?, our murder mystery treasure hunt. i wanted it
          to feel like an old personal website you’d find at 2am rather than another landing page, so most of the look
          is borrowed from the small-web stuff i like, mostly <a href='https://dimden.dev'>dimden.dev</a>, then dunked in
          red for the poster.
        </p>
      </section>

      <section className='box'>
        <div className='box-hd'>palette</div>
        <ul className='space-y-2'>
          {PALETTE.map(c => (
            <li key={c.hex} className='flex items-center gap-3'>
              <span className='h-6 w-10 shrink-0 border-2 border-ash' style={{ background: c.hex }} />
              <span className='font-pixel'>{c.name}</span>
              <span className='text-sm text-ash'>{c.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='box'>
        <div className='box-hd'>the sprites</div>
        <p>
          every little drawing on this site is a grid of letters in <code>components/sprites.ts</code>. <code>b</code> is
          bone, <code>r</code> is blood, <code>.</code> is nothing. a tiny component turns each letter into a square. here
          they all are:
        </p>
        <div className='mt-3 flex flex-wrap items-end gap-4'>
          {Object.keys(SPRITES).map(n => (
            <figure key={n} className='flex flex-col items-center gap-1'>
              <Sprite name={n as keyof typeof SPRITES} scale={3} />
              <figcaption className='text-xs text-ash'>{n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className='box'>
        <div className='box-hd'>things i decided</div>
        <ul className='list-inside space-y-2' style={{ listStyleType: '"☾ "' }}>
          <li>the QR links are random-ish (<code>/c/fab-k3x9</code>) so nobody can skip to the end by typing /c/5.</li>
          <li>your letters are saved on your phone only. no accounts, no tracking, nothing for us to leak.</li>
          <li>the scanlines and static are pure CSS. if your phone asks for less motion, they switch off.</li>
          <li>the story lives in one file so the rest of the team can edit it without touching code.</li>
        </ul>
      </section>

      <section className='box'>
        <div className='box-hd'>log</div>
        <ul className='space-y-2'>
          {LOG.map(l => (
            <li key={l.date} className='grid grid-cols-[4.5rem_1fr] gap-2'>
              <span className='font-pixel text-blood'>{l.date}</span>
              <span>{l.text}</span>
            </li>
          ))}
        </ul>
        <p className='mt-3 text-sm text-ash'>
          built with next.js and tailwind. i used an AI assistant to help with scaffolding and drafts, then went through
          everything by hand. source is on github.
        </p>
      </section>
    </div>
  )
}

export default MakingOf
