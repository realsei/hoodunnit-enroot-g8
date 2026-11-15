import Link from 'next/link'
import Sprite from './Sprite'

type LogoProps = {
  small?: boolean
}

function Logo({ small }: LogoProps) {
  return (
    <Link href='/' className='group inline-flex items-end gap-3 no-underline' aria-label='HooDunnit? home'>
      <span className='flame inline-block'>
        <Sprite name='candle' scale={small ? 3 : 5} />
      </span>
      <span
        className={`flicker relative font-pixel font-bold leading-none tracking-tight text-blood ${small ? 'text-4xl' : 'text-6xl sm:text-7xl'}`}
        style={{ textShadow: 'var(--glow)' }}
      >
        H
        <span className='relative inline-block align-top text-[0.55em]'>
          oo
          <span
            aria-hidden
            className='absolute left-1/2 top-[1.05em] h-0 w-0 -translate-x-1/2 border-x-[0.22em] border-t-[0.42em] border-x-transparent border-t-blood'
          />
        </span>
        DUNNIT
        <span className='inline-block -rotate-6 group-hover:rotate-12'>?</span>
      </span>
    </Link>
  )
}

export default Logo
