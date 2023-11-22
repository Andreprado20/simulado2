// 'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from './header/header'

export default function Home() {
  return (
    <main>
      <Header/>
      <h2 className="flex min-h-screen flex-col items-center justify-between p-24">
        Home
      </h2>
    </main>
  )
}
