import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Header />

    {/* // Display Current Stock */}
    <div className='container bg-red-100 mx-auto'>
      <h1>Current Stock</h1>
    </div>
   </>
  )
}
