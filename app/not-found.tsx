import Link from 'next/link'
import Sprite from '@/components/Sprite'

function NotFound() {
  return (
    <section className='box flex flex-col items-center gap-4 py-10 text-center'>
      <Sprite name='hootHuh' scale={6} />
      <h1 className='text-3xl'>hoo? this trail’s gone cold</h1>
      <p className='max-w-sm'>
        That page doesn’t exist. If you typed a link from a QR poster, check it letter by letter, or find one of us at
        ROOT Cove.
      </p>
      <Link href='/'>back to the case</Link>
    </section>
  )
}

export default NotFound
