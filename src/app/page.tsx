'use client'

import Aviso from '@/components/Aviso'
import Navbar from '@/components/Navbar'
import { SideBarResponsive } from '@/components/SideBarResponsive'
import SideMenu from '@/components/SideMenu'
import { url } from 'inspector'
import Image from 'next/image'

import { PrismaClient, receivedalerts } from '@prisma/client'
import { useEffect, useState } from 'react'

import { prisma } from '@/lib/prisma'

export default function Home() {
  const [filtro, setFiltro] = useState<receivedalerts[]>([])

  const [cor, setCor] = useState('BLUE')

  useEffect(() => {
    async function getData() {
      const data = await (await fetch(`/api?cor=${cor}`)).json()
      setFiltro(data)
      console.log(data)
    }
    getData()
  }, [cor])

  console.log(filtro)

  return (
    <main className="">
      <button onClick={() => setCor('red')}>Filter by Red</button>
      <button onClick={() => setCor('green')}>Filter by Green</button>
      <button onClick={() => setCor('blue')}>Filter by Blue</button>
      <Navbar></Navbar>
      <div className="flex flex-row">
        <div className="min-h-screen w-1/5 h-screen mr-4 hidden lg:block">
          <SideMenu setCor={setCor}></SideMenu>
        </div>
        <div className="block lg:hidden rounded-xl">
          <SideBarResponsive></SideBarResponsive>
        </div>
        <div className=" lg:p-0 p-12">
          {filtro.map(item => (
            <Aviso
              title={item.alertid!}
              description={item.description!}
              key={item.id}
            ></Aviso>
          ))}
        </div>
      </div>
    </main>
  )
}
