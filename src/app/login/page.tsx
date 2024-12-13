"use client"

import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react'
import { authUser } from '@/app/_api/authApi';

import Image from "next/image";
import '../../aa_extra/styles/globals.css';
import styles from '../styles/login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault(); // Evita reload da página

      try {
          // Chamando a função de autenticação
          const response = await authUser(email, senha);
          console.log('Usuário autenticado com sucesso:', response);

          // Salvando o token no localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));

          // Redirecionando o usuário
          router.push('/feed');
      } catch (error) {
          console.error('Erro na autenticação:', error);
          alert('Email ou senha inválidos. Por favor, tente novamente.');
      }
  };
  
    return (  
      <div>
        <Image src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt = "Grupo de estudantes em uma roda" className = {styles.metadeesq} width={500} height ={500}/>

        <div className = {styles.metadedir}>
          <br/>
          <br/>
          <h1 className= {styles.title}>Avaliação de Professores</h1>

          <form onSubmit={handleLogin}>
            <br/>
            <br/>
              <label htmlFor="email"></label><br/>
              <input className = {styles.buttonf} type="email" id="email" name="email" placeholder = "Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              
              <label htmlFor="senha"></label><br/>
              <input className = {styles.buttonf} type="password" id="senha" name="senha" placeholder = "Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
              
              <div>
                <button type="submit" className={styles.buttonc}>Entrar</button>
              </div>
          </form>
        </div>
      </div>  
    );
}

/*    <div className="">
            <Link href = "/feed">
              <button className = {styles.buttonc} >Entrar </button>
            </Link>
          </div>            */
          
