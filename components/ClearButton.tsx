'use client'

import { clearFound } from '@/lib/notebook'

function ClearButton() {
  return (
    <button
      className='self-start border-2 border-bruise px-3 py-1 font-pixel text-sm text-ash hover:border-blood hover:text-blood'
      onClick={() => confirm('wipe your notebook? you’ll have to rescan everything') && clearFound()}
    >
      wipe notebook
    </button>
  )
}

export default ClearButton
