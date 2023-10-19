import Aviso from '@/components/Aviso'
import Navbar from '@/components/Navbar'
import { SideBarResponsive } from '@/components/SideBarResponsive'
import SideMenu from '@/components/SideMenu'
import { url } from 'inspector'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      
      <Navbar></Navbar>
      <div className="flex flex-row">
        <div className="min-h-screen w-1/5 h-screen mr-4 hidden lg:block">
          <SideMenu></SideMenu>
        </div>
        <div className='block lg:hidden rounded-xl'>
          <SideBarResponsive></SideBarResponsive>
        </div>
        <div className=' lg:p-0 p-12'>
          <Aviso></Aviso>
          <Aviso></Aviso>
          <Aviso></Aviso>
          <Aviso></Aviso>
        </div>
      </div>
    </main>
  )
}
