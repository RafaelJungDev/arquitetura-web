import Aviso from '@/components/Aviso'
import Navbar from '@/components/Navbar'
import SideMenu from '@/components/SideMenu'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <div className="min-h-screen w-1/5 h-screen mr-4">
          <SideMenu></SideMenu>
        </div>
        <div>
          <Aviso></Aviso>
          <Aviso></Aviso>
          <Aviso></Aviso>
          <Aviso></Aviso>
        </div>
      </div>
    </main>
  )
}
