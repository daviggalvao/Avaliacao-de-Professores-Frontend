'use client';

import { useState } from 'react';
import Image from "next/image";
import '../styles/globals.css';
import stylesmp from '../styles/modalper.module.css';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className={stylesmp.m}>
      <div className={stylesmp.d}>
        <button onClick={() => setOpen(!open)} className={stylesmp.buttonc}>Editar Perfil</button>
        {open ? (
      <div className = {stylesmp.mid}>
      
      <Image src="https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain" 
      alt = "Foto de perfil não cadastrada" className = {stylesmp.fp} width={100} height ={100}/> 
      
      <form>
          <label htmlFor="nome"></label><br/>
          <input className = {stylesmp.buttonm} type="name" id="nome" name="nome" placeholder = "Nome"/>

          <label htmlFor="email"></label><br/>
          <input className = {stylesmp.buttonm} type="email" id="email" name="email" placeholder = "Email"/>

          <label htmlFor="curso"></label><br/>
          <input className = {stylesmp.buttonm} type="name" id="curso" name="curso" placeholder = "Curso"/>

          <label htmlFor="departamento"></label><br/>
          <input className = {stylesmp.buttonm} type="name" id="departamento" name="departamento" placeholder = "Departamento"/>

          <label htmlFor="senha"></label><br/>
          <input className = {stylesmp.buttonm} type="password" id="senha" name="senha" placeholder = "Senha atual"/>

          <label htmlFor="senha"></label><br/>
          <input className = {stylesmp.buttonm} type="password" id="senha" name="senha" placeholder = "Nova senha"/>

          <label htmlFor="senha"></label><br/>
          <input className = {stylesmp.buttonm} type="password" id="senha" name="senha" placeholder = "Confirmar nova senha"/>
      </form> 

      <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
        <button className = {stylesmp.buttonc}>Salvar</button>
      </div>

  </div>
    ) : (
      <div className={stylesmp.hide}></div>
    )}
      </div>
    </main>
  );
}
