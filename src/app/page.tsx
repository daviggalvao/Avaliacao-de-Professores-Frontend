'use client';

import Image from "next/image";

export default function Home() {
  return (

    <div>
      <style jsx>{`
      
        .img {
          height: 100%;
          width: 50%;
          object-fit: cover;
        }

        .form {
          position: fixed;
          top: 200px; 
          right: 150px; 
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 5px;
        }
      
        .h {
          position: fixed;
          top: 10px; 
          right:160px; 
          padding: 20px;
        }
      `}</style>

      <Image src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "Grupo de estudantes em uma roda"
      className = "img" width={500} height ={500}/>

      <h1 className = "h">Avaliação de professores</h1>

      <form className = "form">
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email" placeholder = "Digite aqui seu email..."/><br/>
          <label htmlFor="senha">Senha:</label><br/>
          <input type="password" id="senha" name="senha" placeholder = "Digite aqui sua senha..."/>
      </form> 
    </div>

  );
}
