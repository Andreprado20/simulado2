import Header from "../components/header/page"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"



export default function Recover() {
    return (
      <main 
      className="flex min-h-screen flex-col items-center p-6"
    // "flex min-h-screen flex-col items-center justify-between p-24"
      >
        <Header/>
        <h3>
          Digite seu Login
        </h3>
        <Input/>
        <h3>
          Digite sua senha
        </h3>
        <Input/>
        <Button className="w-full">Entrar</Button>
        {/* <h1 className="justify-between p-24" >Recover</h1> */}
      </main>
    )
  }