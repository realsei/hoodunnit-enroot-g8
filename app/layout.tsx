import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { Courier_Prime, Pixelify_Sans } from 'next/font/google'
import Logo from '@/components/Logo'
import Notebook from '@/components/Notebook'
import Sprite from '@/components/Sprite'
import Webring from '@/components/Webring'
import { BOT_USERNAME, EVENT } from '@/content/case'
import './globals.css'

const pixelify = Pixelify_Sans({ variable: '--font-pixelify', subsets: ['latin'] })
const courier = Courier_Prime({ variable: '--font-courier', subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'HooDunnit? | EnROOT Group 8',
  description: 'Join Hoot the Owl and find out who wrapped Manny. A murder mystery treasure hunt around SUTD, 23 Nov 2026 at ROOT Cove.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

const NAV = [
  { href: '/', label: 'the case' },
  { href: '/suspects', label: 'suspects' },
  { href: '/notebook', label: 'your notebook' },
  { href: '/making-of', label: 'how this was made' },
]

function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${pixelify.variable} ${courier.variable}`}>
      <body className='min-h-dvh'>
        <a href='#main' className='sr-only focus:not-sr-only'>skip to the case</a>
        <div className='mx-auto max-w-[900px] px-3 pb-28 pt-5 md:pb-10'>
          <header className='mb-4 flex flex-wrap items-end justify-between gap-2'>
            <Logo />
            <p className='font-pixel text-sm text-ash'>
              {EVENT.by}
              <br />
              {EVENT.date}, {EVENT.place.split(' (')[0]}
            </p>
          </header>
          <div className='tape mb-5' aria-hidden />

          <div className='md:flex md:items-start md:gap-4'>
            <main id='main' className='min-w-0 md:w-[675px] md:shrink-0'>
              {children}
            </main>

            <aside className='mt-6 flex flex-col gap-4 md:mt-0 md:w-[225px] md:shrink-0'>
              <nav className='box' aria-label='site'>
                <div className='box-hd'>pages</div>
                <ul className='space-y-1'>
                  {NAV.map(n => (
                    <li key={n.href} className='flex items-center gap-2'>
                      <span aria-hidden className='text-blood'>☾</span>
                      <Link href={n.href}>{n.label}</Link>
                    </li>
                  ))}
                  <li className='flex items-center gap-2'>
                    <span aria-hidden className='text-blood'>☾</span>
                    <a href={`https://t.me/${BOT_USERNAME}`}>ask hoot on telegram</a>
                  </li>
                </ul>
              </nav>

              <section className='box hidden md:block'>
                <div className='box-hd'>case notebook</div>
                <Notebook />
              </section>

              <section className='box'>
                <div className='box-hd'>webring</div>
                <Webring />
              </section>

              <div className='flex items-end justify-between px-2' aria-hidden>
                <Sprite name='pumpkin' scale={3} />
                <Sprite name='bat' scale={2} className='mb-8' />
                <Sprite name='hoot' scale={3} />
              </div>
            </aside>
          </div>

          <footer className='mt-10 text-center text-xs text-ash'>
            made with too little sleep by max, the group 8 rootechie.
            <br />
            this is a game. no mannequins were harmed (much).
          </footer>
        </div>

        <div className='fixed inset-x-0 bottom-0 z-50 border-t-2 border-bruise bg-black/90 px-4 py-2 md:hidden'>
          <Notebook compact />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
