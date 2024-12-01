'use client';

import Image from "next/image";
import '../styles/globals.css';
import styles from '../styles/login.module.css';
import stylespfp from '../styles/regpfp.module.css';

export default function Home() {
  return (
  <div className = {styles.janela}>
    <Image src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt = "Grupo de estudantes em uma roda" className = {styles.metadeesq} width={500} height ={500}/>

      <div className = {styles.metadedir}>

      <Image src="https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain" 
      alt = "Foto de perfil não cadastrada" className = {stylespfp.pfp} width={100} height ={100}/>
          
          <form>
              <label htmlFor="email"></label><br/>
              <input className = {styles.buttonf} type="email" id="email" name="email" placeholder = "Email"/>

              <label htmlFor="senha"></label><br/>
              <input className = {styles.buttonf} type="password" id="senha" name="senha" placeholder = "Senha"/>

              <label htmlFor="nome"></label><br/>
              <input className = {styles.buttonf} type="name" id="nome" name="nome" placeholder = "Nome"/>

              <label htmlFor="curso"></label><br/>
              <input className = {styles.buttonf} type="name" id="curso" name="curso" placeholder = "Curso"/>

              <label htmlFor="departamento"></label><br/>
              <input className = {styles.buttonf} type="name" id="departamento" name="departamento" placeholder = "Departamento"/>

          </form> 

          <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
            <button className = {styles.buttonc}>Criar Conta</button>
          </div>
        </div>
  </div>

  );
}
