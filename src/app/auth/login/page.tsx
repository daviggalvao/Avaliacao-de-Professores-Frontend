"use client"

import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react'
import { loginUser } from '@/app/_api/authApi';
import logoUnb from "../../../assets/logounb.png";
import Image from "next/image";
import '../../globals.css';
import styles from '../../../aa_extra/styles/login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault(); // Evita reload da página

      try {
          // Chamando a função de autenticação
          const response = await loginUser(email, senha);
          console.log('Usuário autenticado com sucesso:', response);

          // Salvando o token no localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));

          // Redirecionando o usuário
          window.location.href = '/'; 
      } catch (error) {
          console.error('Erro na autenticação:', error);
          alert('Email ou senha inválidos. Por favor, tente novamente.');
      }
  };
  
    return (  
      <div className = "flex h-screen">
        <div className = "bg-foreground flex flex-col justify-center items-center">
        <Image
          src={logoUnb}
          alt="Logo UnB"
          className="flex basis-1/4 h-1/2 w-1/2"
          width={500}
          height={500}
        />
        </div>
        <div className = "flex basis-2/4 flex-col justify-center items-center bg-background">
          <h1 className= "text-center text-white text-5xl">Avaliação de Professores</h1>
          <form onSubmit={handleLogin} className="text-black w-3/5">
              <label htmlFor="email"></label><br/>
              <input className = "text-center relative w-full p-5 mb-3 rounded-3xl" type="email" id="email" name="email" placeholder = "Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              
              <label htmlFor="senha"></label><br/>
              <input className = "text-center relative w-full p-5 mb-3 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
              
              <div className="flex items-center justify-center">
                <button type="submit" className="text-center bg-foreground text-white p-4 w-1/3 rounded-2xl">Entrar</button>
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