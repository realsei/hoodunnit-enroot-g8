import { WEBRING } from '@/content/webring'

function Webring() {
  return (
    <div>
      <div className='flex flex-wrap gap-1'>
        {WEBRING.map(g => (
          <a
            key={g.group}
            href={g.href}
            title={`EnROOT group ${g.group}: ${g.theme}`}
            className={`flex h-[31px] w-[88px] flex-col justify-center border-2 border-outset px-1 font-pixel text-[10px] leading-tight no-underline ${g.group == 8 ? 'border-blood bg-scab text-bone' : 'border-ash bg-bruise text-bone'}`}
            style={{ textShadow: 'none', borderStyle: 'outset' }}
          >
            <span>enroot g{g.group}</span>
            <span className='truncate text-ash'>{g.theme}</span>
          </a>
        ))}
      </div>
      <p className='mt-1 text-xs text-ash'>&lt;-- the other enroot groups</p>
    </div>
  )
}

export default Webring
