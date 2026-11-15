import Sprite from './Sprite'

function CrimeScene() {
  return (
    <div className='relative mx-auto flex h-56 max-w-md items-end justify-center' role='img' aria-label='Hoot the owl sitting on a bundle wrapped in black bags and red tape'>
      <span className='absolute left-4 top-6 opacity-80'><Sprite name='bat' scale={3} /></span>
      <span className='absolute right-6 top-2 opacity-60'><Sprite name='bat' scale={2} /></span>

      <div className='relative mb-6 h-20 w-72 rounded-[40%_45%_40%_50%] bg-[#0c0c0c] shadow-[0_0_40px_#b3152e33,inset_-12px_-8px_0_#000,inset_8px_6px_0_#1c1c1c]'>
        <span className='absolute inset-y-0 left-12 w-4 -skew-x-6 bg-blood/90' />
        <span className='absolute inset-y-0 left-[45%] w-4 skew-x-3 bg-blood/90' />
        <span className='absolute inset-y-0 right-14 w-4 -skew-x-3 bg-blood/90' />
        <span className='absolute -left-3 top-5 h-10 w-6 rounded-full bg-[#0c0c0c]' />
        <span className='absolute -right-3 top-6 h-8 w-6 rounded-full bg-[#0c0c0c]' />
        <span className='absolute -top-[88px] left-[52%]'>
          <Sprite name='hoot' scale={5} />
        </span>
        <span className='flicker absolute -top-28 left-[72%] font-pixel text-4xl text-blood'>?</span>
      </div>

      <div className='tape-text absolute bottom-0 left-1/2 w-[120%] -translate-x-1/2 -rotate-2 px-2 py-0.5 text-center text-sm'>
        crime scene ✕ do not cross ✕ crime scene ✕ do not cross ✕ crime scene
      </div>
    </div>
  )
}

export default CrimeScene
