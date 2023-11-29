import Header from "../components/header/page"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from 'next/link'



export default function Recover() {
    return (
      <main 
      className="flex min-h-screen flex-col items-center p-6"
    // "flex min-h-screen flex-col items-center justify-between p-24"
      >
        <Header/>
        <h3>
          Digite seu Login:
        </h3>
        <Input placeholder="m@example.com"/>
        <h3>
          Digite sua senha:
        </h3>
        <Input type="password" placeholder="Senha"/>
        <Link href="/dashboard"><Button className="w-full">Entrar</Button></Link>
        <Link href="/recover"><Button className="w-full">Esqueci minha senha</Button></Link>
        <Link href="/registro"><Button className="w-full">Ainda não tenho uma conta</Button></Link>
      </main>
    )
  }