import React from "react";
import Image from "next/image";
import { useState } from "react";
import defaultFoto from '../../assets/fotodefault.svg';

const ModalPerfil = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
        <button onClick={() => setOpen(!open)} className = "text-black bg-green-400 px-1 py-1 rounded-2xl w-30 h-8 flex justify-center items-center cursor-pointer text-lg border-2 border-black mb-1 font-light">Editar perfil</button>
        {open ? (
          <div className={"h-full w-full bg-black/40 fixed top-0 left-0 flex flex-col justify-center items-center"}>
            <div className="bg-background rounded-xl flex flex-col justify-center items-center relative w-1/3">
            
                <div onClick={() => setOpen(false)} className="text-[#aaa] absolute right-3 cursor-pointer top-3 text-3xl font-bold">&times;</div>

                <Image src={defaultFoto} 
                alt = "Foto de perfil não cadastrada" className="mt-4 rounded-full cursor-pointer" width={100} height ={100}/>

                <form className = "text-black w-4/5">
                  <label htmlFor="nome"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="name" id="nome" name="nome" placeholder = "Nome"/>

                  <label htmlFor="email"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="email" id="email" name="email" placeholder = "Email"/>

                  <label htmlFor="curso"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="name" id="curso" name="curso" placeholder = "Curso"/>

                  <label htmlFor="departamento"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="name" id="departamento" name="departamento" placeholder = "Departamento"/>

                  <label htmlFor="senha"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Senha atual"/>

                  <label htmlFor="senha"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Nova senha"/>

                  <label htmlFor="senha"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Confirmar nova senha"/>
                </form> 
                
                <button onClick={() => setOpen(false)} className="text-center bg-foreground mb-4 w-28 text-white p-3 rounded-xl">Salvar</button>
            </div>
        </div>
    ) : (
      <div className="hidden"></div>
    )}
      </>
  );
};

export default ModalPerfil;