'use client'

import { useEffect } from 'react'
import { markFound } from '@/lib/notebook'

type LetterStampProps = {
  slug: string
  letter: string
}

function LetterStamp({ slug, letter }: LetterStampProps) {
  useEffect(() => markFound(slug, letter), [slug, letter])

  return (
    <div className='thud flex flex-col items-center py-4'>
      <div
        className='stamp grid h-36 w-36 place-items-center rounded-full border-[6px] border-double border-blood font-pixel text-8xl text-blood'
        style={{ textShadow: 'var(--glow)', boxShadow: '0 0 30px #b3152e44, inset 0 0 20px #b3152e33' }}
        aria-label={`your letter is ${letter}`}
      >
        {letter}
      </div>
      <p className='mt-3 text-sm text-ash'>letter saved to your notebook</p>
    </div>
  )
}

export default LetterStamp
