import { WEBRING } from '@/content/webring'

function Webring() {
  return (
    <div>
      <div className='flex flex-wrap gap-1'>
        {WEBRING.map(g => {
          const label = (
            <>
              <span>enroot g{g.group}</span>
              <span className='truncate text-ash'>{g.theme}</span>
            </>
          )
          const cls = `flex h-[31px] w-[88px] flex-col justify-center border-2 px-1 font-pixel text-[10px] leading-tight no-underline ${g.group == 8 ? 'border-blood bg-scab text-bone' : 'border-ash bg-bruise text-bone'}`

          if (!g.href) return (
            <span key={g.group} title={`EnROOT group ${g.group}: ${g.theme} (no site yet)`} className={`${cls} opacity-50`} style={{ borderStyle: 'inset' }}>
              {label}
            </span>
          )

          return (
            <a key={g.group} href={g.href} title={`EnROOT group ${g.group}: ${g.theme}`} className={cls} style={{ textShadow: 'none', borderStyle: 'outset' }}>
              {label}
            </a>
          )
        })}
      </div>
      <p className='mt-1 text-xs text-ash'>&lt;-- all the enroot groups</p>
    </div>
  )
}

export default Webring
