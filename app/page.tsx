import Link from 'next/link'
import CrimeScene from '@/components/CrimeScene'
import Sprite from '@/components/Sprite'
import { BOT_USERNAME, EVENT, LOCATIONS, VICTIM } from '@/content/case'

function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <section className='box overflow-hidden pt-6'>
        <CrimeScene />
        <h1 className='mt-6 text-3xl sm:text-4xl'>someone wrapped {VICTIM.name}.</h1>
        <p className='mt-3'>
          {VICTIM.name} was {VICTIM.blurb} Last night someone wrapped him in black trash bags and red tape and left him in
          ROOT Cove. Hoot the Owl saw everything, but all Hoot can say is “hoo?”
        </p>
        <p className='mt-3'>
          Five people were on campus that night. Help Hoot find out who did it, and see some corners of SUTD you’ve
          probably walked past without noticing.
        </p>
      </section>

      <section className='box'>
        <div className='box-hd'>when and where</div>
        <dl className='grid grid-cols-[auto_1fr] gap-x-4 gap-y-1'>
          <dt className='text-ash'>date</dt>
          <dd>{EVENT.date}</dd>
          <dt className='text-ash'>time</dt>
          <dd>{EVENT.time} (briefing at 5pm sharp)</dd>
          <dt className='text-ash'>start at</dt>
          <dd>{EVENT.place}</dd>
          <dt className='text-ash'>bring</dt>
          <dd>a phone with a QR scanner, comfy shoes, a friend or two</dd>
        </dl>
      </section>

      <section className='box'>
        <div className='box-hd'>how to play</div>
        <ol className='list-inside list-decimal space-y-2 marker:font-pixel marker:text-blood'>
          <li>Come to ROOT Cove for the briefing and pick up your clue card.</li>
          <li>
            Your card has riddles for {LOCATIONS.length} places around campus. Visit them in any order. Each one has a QR code
            stuck up somewhere.
          </li>
          <li>Scan it. You’ll get a piece of evidence, a fun fact, and one letter for your notebook.</li>
          <li>Collect all {LOCATIONS.length} letters, unscramble them, and name the culprit in the form.</li>
          <li>Head back to ROOT Cove for your ice cream.</li>
        </ol>
        <p className='mt-3 text-sm text-ash'>
          stuck on a riddle? message <a href={`https://t.me/${BOT_USERNAME}`}>@{BOT_USERNAME}</a> and Hoot might give you a
          nudge.
        </p>
      </section>

      <section className='box'>
        <div className='box-hd'>what you get</div>
        <ul className='space-y-2'>
          <li className='flex items-center gap-3'>
            <Sprite name='candle' scale={2} />
            free ice cream for the first 100 people who register
          </li>
          <li className='flex items-center gap-3'>
            <Sprite name='pumpkin' scale={2} />
            10 Grab vouchers, drawn at random from everyone who finishes
          </li>
        </ul>
      </section>

      <section className='box flex items-center gap-4'>
        <Sprite name='hootHuh' scale={4} className='shrink-0' />
        <p>
          Meet the <Link href='/suspects'>five suspects</Link> before you go. Somebody’s alibi doesn’t hold up.
        </p>
      </section>

      <p className='px-2 text-xs text-ash'>
        This is a made-up story for a game. Nobody real is involved and nothing gory happens. Please stick to the open
        areas of campus and don’t go into labs or rooms that are closed.
      </p>
    </div>
  )
}

export default Home
