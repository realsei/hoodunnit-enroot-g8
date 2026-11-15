import type { Metadata } from 'next'
import Notebook from '@/components/Notebook'
import ClearButton from '@/components/ClearButton'

export const metadata: Metadata = { title: 'your notebook | HooDunnit?' }

function NotebookPage() {
  return (
    <div className='flex flex-col gap-4'>
      <section className='box'>
        <h1 className='text-3xl'>your case notebook</h1>
        <p className='mt-2'>
          Every QR code you scan adds a letter here. It only lives on this phone, so stick to one phone per team.
        </p>
      </section>

      <section className='box'>
        <Notebook />
      </section>

      <ClearButton />
    </div>
  )
}

export default NotebookPage
