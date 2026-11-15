import type { Metadata } from 'next'
import Sprite from '@/components/Sprite'
import { SpriteName } from '@/components/sprites'
import { SUSPECTS } from '@/content/case'

export const metadata: Metadata = { title: 'suspects | HooDunnit?' }

function Suspects() {
  return (
    <div className='flex flex-col gap-4'>
      <section className='box'>
        <h1 className='text-3xl'>the usual suspects</h1>
        <p className='mt-2'>Five people were on campus the night Manny got wrapped. Every location you visit should rule one of them out. Whoever is left over did it.</p>
      </section>

      <div className='grid gap-4 sm:grid-cols-2'>
        {SUSPECTS.map((s, i) => (
          <article key={s.id} className={`box flex gap-4 ${i % 2 ? 'sm:rotate-[0.6deg]' : 'sm:-rotate-[0.8deg]'}`}>
            <div className='shrink-0 self-start border-2 border-bruise bg-[#120a10] p-2'>
              <Sprite name={s.id as SpriteName} scale={6} title={`portrait of ${s.name}`} />
            </div>
            <div>
              <h2 className='text-xl'>{s.name}</h2>
              <p className='text-sm text-ash'>{s.role}</p>
              <p className='mt-2'>{s.alibi}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Suspects
