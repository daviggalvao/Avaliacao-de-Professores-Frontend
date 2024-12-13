"use client"

import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react'
import { postUser } from '@/app/_api/userApi';

import Image from "next/image";
import '../../aa_extra/styles/globals.css';
import styles from '../styles/login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();
  

    return (  
      <div>
        <Image src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt = "Grupo de estudantes em uma roda" className = {styles.metadeesq} width={500} height ={500}/>

        <div className = {styles.metadedir}>
          <br/>
          <br/>
          <h1 className= {styles.title}>Avaliação de Professores</h1>
          <form>
            <br/>
            <br/>
              <label htmlFor="email"></label><br/>
              <input className = {styles.buttonf} type="email" id="email" name="email" placeholder = "Email"/>
              <label htmlFor="senha"></label><br/>
              <input className = {styles.buttonf} type="password" id="senha" name="senha" placeholder = "Senha"/>
          </form> 

          <div className="">
            <Link href = "/feed">
              <button className = {styles.buttonc} >Entrar </button>
            </Link>
          </div>
        </div>
      </div>  
    );
}