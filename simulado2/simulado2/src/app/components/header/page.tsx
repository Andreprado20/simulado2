import Link from 'next/link'

export default function Header() {
    return (
    <main className='bg-slate-600'>
         <ul className="flex justify-center p-4 px-500" >
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/login">Login</Link>
            </li>
            <li>
                <Link href="/registro">Registro</Link>
            </li>
            <li>
                <Link href="/recover">Recover</Link>
            </li>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </main>
    )
}
