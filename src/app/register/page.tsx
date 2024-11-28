'use client';

import Image from "next/image";

export default function Home() {
  return (
  <div className = "janela">
    <Image src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt = "Grupo de estudantes em uma roda" className = "img metadeesq" width={500} height ={500}/>

      <div className = "metadedir">
          <h1 className = "AvProf">Avaliação de Professores</h1>

          <form>
              <label htmlFor="email"></label><br/>
              <input className = "buttonf create" type="email" id="email" name="email" placeholder = "Email"/><br/>

              <label htmlFor="senha"></label><br/>
              <input className = "buttonf create" type="password" id="senha" name="senha" placeholder = "Senha"/>

              <label htmlFor="nome"></label><br/>
              <input className = "buttonf create" type="name" id="nome" name="nome" placeholder = "Nome"/>

              <label htmlFor="curso"></label><br/>
              <input className = "buttonf create" type="name" id="curso" name="curso" placeholder = "Curso"/>

              <label htmlFor="departamento"></label><br/>
              <input className = "buttonf create" type="name" id="departamento" name="departamento" placeholder = "Departamento"/>

          </form> 

          <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
            <button className = "buttonc criarlogreg">Criar Conta</button>
          </div>
        </div>
  </div>

  );
}
