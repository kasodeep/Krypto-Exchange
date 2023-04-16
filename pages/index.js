import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <div className='gradient-bg-welcome'>
      <Navbar />
      <Welcome />
    </div>
  )
}
