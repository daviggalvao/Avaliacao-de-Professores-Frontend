'use client';

import Image from "next/image";
import './globals.css';
;


export default function Home() {
  return (
  <div>
    <Image src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt = "Grupo de estudantes em uma roda" className = "img" width={500} height ={500}/>

      <h1 className = "h1">Avaliação de professores</h1>

      <form className = "form">
          <label htmlFor="email"></label><br/>
          <input className = "button3" type="email" id="email" name="email" placeholder = "Email"/><br/>
          <label htmlFor="senha"></label><br/>
          <input className = "button4" type="password" id="senha" name="senha" placeholder = "Senha"/>
      </form> 

      <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
        <button className = "button">Entrar </button>
        <button className = "button2">Criar Conta</button>
      </div>
  </div>

  );
}
