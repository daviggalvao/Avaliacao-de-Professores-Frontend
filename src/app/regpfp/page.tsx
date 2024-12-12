'use client';

import Image from "next/image";
import Link from "next/link";
import '../styles/globals.css';

export default function Home() {
  return (
  <div className="flex h-screen">
    <div className="bg-foreground flex flex-col justify-center items-center">
      <Image src = "logounb.svg" alt = "Logo UnB" className="flex basis-2/4 h-1/2 w-1/3" width={100} height ={100}/>
    </div>

    <div className="flex basis-2/4 flex-col justify-center items-center bg-background">

          <Image src="perfil.svg" 
          alt = "Foto de perfil não cadastrada" className="rounded-full"width={100} height ={100}/>
          
          <form className="text-black w-3/5 my-4">
              <label htmlFor="email"></label><br/>
              <input className = "text-center relative w-full mb-3 p-5 rounded-3xl" type="email" id="email" name="email" placeholder = "Email"/>

              <label htmlFor="senha"></label><br/>
              <input className = "text-center relative w-full mb-3 p-5 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Senha"/>

              <label htmlFor="nome"></label><br/>
              <input className = "text-center relative w-full mb-3 p-5 rounded-3xl" type="name" id="nome" name="nome" placeholder = "Nome"/>

              <label htmlFor="curso"></label><br/>
              <input className = "text-center relative w-full mb-3 p-5 rounded-3xl" type="name" id="curso" name="curso" placeholder = "Curso"/>

              <label htmlFor="departamento"></label><br/>
              <input className = "text-center relative w-full p-5 rounded-3xl" type="name" id="departamento" name="departamento" placeholder = "Departamento"/>
          </form> 

          <Link href="/login">
            <button className="text-center bg-foreground text-white p-5 rounded-2xl">
              Criar Conta
            </button>
        </Link>
          
        </div>
  </div>

  );
}
