import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LetterStamp from '@/components/LetterStamp'
import Sprite from '@/components/Sprite'
import { LOCATIONS, SUSPECTS, FORM_URL, findLocation } from '@/content/case'

export function generateStaticParams() {
  return LOCATIONS.map(l => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: PageProps<'/c/[slug]'>): Promise<Metadata> {
  const loc = findLocation((await params).slug)
  return {
    title: loc ? `${loc.name} | HooDunnit?` : 'HooDunnit?',
    robots: { index: false },
  }
}

async function LocationPage({ params }: PageProps<'/c/[slug]'>) {
  const loc = findLocation((await params).slug)
  if (!loc) notFound()

  const cleared = SUSPECTS.find(s => s.id == loc.clears)

  return (
    <div className='flex flex-col gap-4'>
      <section className='box'>
        <div className='flex items-center gap-4'>
          <Sprite name={loc.icon} scale={5} title={loc.name} />
          <div>
            <p className='text-sm text-ash'>you found a location</p>
            <h1 className='text-3xl sm:text-4xl'>{loc.name}</h1>
          </div>
        </div>

        <LetterStamp slug={loc.slug} letter={loc.letter} />
      </section>

      <section className='box'>
        <div className='box-hd'>evidence</div>
        <p>{loc.clue}</p>
        {cleared && (
          <p className='mt-3 text-ash'>
            <s>{cleared.name}</s> can probably be crossed off. check the <Link href='/suspects'>suspect list</Link>.
          </p>
        )}
      </section>

      {loc.factVerified && (
        <section className='box'>
          <div className='box-hd flex items-center gap-2'>
            <Sprite name='magnifier' scale={2} />
            did you know
          </div>
          <p>{loc.fact}</p>
        </section>
      )}

      <section className='box border-dashed'>
        <div className='box-hd'>hoot whispers where to go next</div>
        <div className='flex items-start gap-3'>
          <Sprite name='hootHuh' scale={3} className='shrink-0' />
          <p className='italic'>“{loc.next}”</p>
        </div>
      </section>

      {FORM_URL && (
        <p className='text-center text-sm text-ash'>
          got all five letters? <a href={FORM_URL}>submit your accusation</a>
        </p>
      )}
    </div>
  )
}

export default LocationPage
