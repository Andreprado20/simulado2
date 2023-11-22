import Image from 'next/image'
import Link from 'next/link'
import Header from '../header/header'

export default function Dashboard() {
  return (
    <main>
        <Header/>
        <h1 className="flex min-h-screen flex-col items-center justify-between p-24">
            Dashboard
        </h1>
    </main>
  )
}
