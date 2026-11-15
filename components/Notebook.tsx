'use client'

import Link from 'next/link'
import { LOCATIONS, FORM_URL } from '@/content/case'
import { useFound } from '@/lib/notebook'

type NotebookProps = {
  compact?: boolean
}

function Notebook({ compact }: NotebookProps) {
  const found = useFound()
  const count = LOCATIONS.filter(l => found[l.slug]).length
  const done = count === LOCATIONS.length

  const slots = (
    <ol className='flex gap-1.5' aria-label={`${count} of ${LOCATIONS.length} letters found`}>
      {LOCATIONS.map(l => (
        <li
          key={l.slug}
          title={found[l.slug] ? l.name : 'not found yet'}
          className={`grid h-9 w-8 place-items-center border-2 font-pixel text-xl ${found[l.slug] ? 'border-blood text-blood' : 'border-bruise text-bruise'}`}
          style={found[l.slug] ? { textShadow: 'var(--glow)' } : undefined}
        >
          {found[l.slug] || '?'}
        </li>
      ))}
    </ol>
  )

  if (compact) {
    return (
      <Link href='/notebook' className='flex items-center justify-between gap-3 no-underline' aria-label='open case notebook'>
        <span className='font-pixel text-sm text-bone'>
          notebook
          <br />
          <span className='text-ash'>{count}/{LOCATIONS.length}</span>
        </span>
        {slots}
      </Link>
    )
  }

  return (
    <div>
      {slots}
      <p className='mt-2 text-sm text-ash'>
        {done
          ? 'all five! unscramble them to name the culprit.'
          : count == 0
            ? 'scan a QR code at a location to collect its letter.'
            : `${LOCATIONS.length - count} more to go.`}
      </p>
      {done && FORM_URL && (
        <a href={FORM_URL} className='mt-2 inline-block font-pixel'>make your accusation</a>
      )}
    </div>
  )
}

export default Notebook
