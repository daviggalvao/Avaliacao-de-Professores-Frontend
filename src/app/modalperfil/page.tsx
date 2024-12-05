'use client';

import { useState } from 'react';
import Image from "next/image";
import '../styles/globals.css';
import stylesmc from '../styles/modal.module.css';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
      <div className={stylesmc.d}>
        <button onClick={() => setOpen(!open)} className={stylesmc.buttonc}>Editar Perfil</button>
        {open ? (
          <div className={stylesmc.modal}>

              <div className = {stylesmc.mid}>
                <div className={stylesmc.close}>&times;</div>

                <Image src="https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain" 
                alt = "Foto de perfil não cadastrada" className = {stylesmc.fp} width={100} height ={100}/> 

                <form>
                  <label htmlFor="nome"></label><br/>
                  <input className = {stylesmc.buttonm} type="name" id="nome" name="nome" placeholder = "Nome"/>

                  <label htmlFor="email"></label><br/>
                  <input className = {stylesmc.buttonm} type="email" id="email" name="email" placeholder = "Email"/>

                  <label htmlFor="curso"></label><br/>
                  <input className = {stylesmc.buttonm} type="name" id="curso" name="curso" placeholder = "Curso"/>

                  <label htmlFor="departamento"></label><br/>
                  <input className = {stylesmc.buttonm} type="name" id="departamento" name="departamento" placeholder = "Departamento"/>

                  <label htmlFor="senha"></label><br/>
                  <input className = {stylesmc.buttonm} type="password" id="senha" name="senha" placeholder = "Senha atual"/>

                  <label htmlFor="senha"></label><br/>
                  <input className = {stylesmc.buttonm} type="password" id="senha" name="senha" placeholder = "Nova senha"/>

                  <label htmlFor="senha"></label><br/>
                  <input className = {stylesmc.buttonm} type="password" id="senha" name="senha" placeholder = "Confirmar nova senha"/>
                </form> 

                <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
                  <button className = {stylesmc.buttonc}>Salvar</button>
                </div>

          </div>
        </div>
    ) : (
      <div className={stylesmc.hide}></div>
    )}
      </div>
  );
}
