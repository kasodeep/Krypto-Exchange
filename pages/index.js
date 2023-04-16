import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='gradient-bg-welcome'>
      <Head>
        <title>Krypto Exchange</title>
      </Head>
      <Navbar />
      <Welcome />
    </div>
  )
}
