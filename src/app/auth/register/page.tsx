"use client"

import Image from "next/image";
import '../../globals.css';
import styles from '../../../aa_extra/styles/login.module.css';

import React, { useState } from 'react'
import { registerUser } from '@/app/_api/authApi';

export default function SignIn() {
    const [input, setInput] = useState({email: "", nome: "", senha: "", curso: "", departamento: "", foto_perfil: ""})

    const createUser = async () => {
      try {
        await registerUser(input)
      } catch (error) {
        
      }
    }

    return (    
      <div className = {styles.janela}>
        <Image src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt = "Grupo de estudantes em uma roda" className = {styles.metadeesq} width={500} height ={500}/>

        <div className = {styles.metadedir}></div>
          <h1 className = {styles.title}>Avaliação de Professores</h1>

          <form> 
            <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='email'  onChange={(e) => setInput({...input, email: e.target.value})}/>
            
            <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='nome' onChange={(e) => setInput({...input, nome: e.target.value})}/>
            
            <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='senha' onChange={(e) => setInput({...input, senha: e.target.value})}/>
            
            <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='curso' onChange={(e) => setInput({...input, curso: e.target.value})}/>
            
            <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='departamento' onChange={(e) => setInput({...input, departamento: e.target.value})}/>
            
            <input type="text" className='rounded-lg w-1/2 border border-black p-2' placeholder='foto_perfil' onChange={(e) => setInput({...input, foto_perfil: e.target.value})}/>
          
            <button onClick={createUser} className={styles.buttonc}>Criar Conta</button>
          </form>
      </div>
    );
}
