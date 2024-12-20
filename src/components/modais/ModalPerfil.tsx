import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import defaultFoto from '../../assets/fotodefault.svg';
import { getStorageUser } from "@/utils/auth";
import { updateUser } from "@/app/_api/userApi";

const ModalPerfil = () => {
  const user = getStorageUser();
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState({
    nome: "",
    email: "",
    novaSenha: "",
    novaSenhaConfirma: "",
  });

  const editUser = async () => {
    if (input.novaSenha !== input.novaSenhaConfirma) {
      alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
      return;
    }

    const updateData: any = {};

    if (input.nome) {
      updateData.nome = input.nome;
    }
    if (input.email) { // Verifica se o email foi alterado
      updateData.email = input.email;
    }
    if (input.novaSenha) {
      updateData.senha = input.novaSenha;
    }

    try {
      // Enviar os dados para a API apenas se a senha for confirmada corretamente
      await updateUser(user.id, updateData);
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      alert("Erro ao atualizar usuário. Por favor, tente novamente.");
    }
  };

  return (
    <>
        <button onClick={() => setOpen(!open)} className = "text-black bg-green-400 px-1 py-1 rounded-2xl w-30 h-8 flex justify-center items-center cursor-pointer text-lg border-b-2 border-black mb-1 font-light">Editar perfil</button>
        
        {open ? (
          <div className={"h-full w-full bg-black/40 fixed top-0 left-0 flex flex-col justify-center items-center"}>
            <div className="bg-background rounded-xl flex flex-col justify-center items-center relative w-1/3">
            
                <div onClick={() => setOpen(false)} className="text-[#aaa] absolute right-3 cursor-pointer top-3 text-3xl font-bold">&times;</div>

                <Image src={defaultFoto} 
                alt = "Foto de perfil não cadastrada" className="mt-4 rounded-full cursor-pointer" width={100} height ={100}/>

                <form className = "text-black w-4/5">
                  <label htmlFor="nome"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="name" id="nome" name="nome" placeholder = "Nome" 
                         onChange={(e) => setInput({ ...input, nome: e.target.value })}/>

                  <label htmlFor="email"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="email" id="email" name="email" placeholder = "Email" 
                         onChange={(e) => setInput({ ...input, email: e.target.value })}/>

                  {/*<label htmlFor="curso"></label><br/>*/}
                  {/*<input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="name" id="curso" name="curso" placeholder = "Curso"/>*/}

                  {/*<label htmlFor="departamento"></label><br/>*/}
                  {/*<input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="name" id="departamento" name="departamento" placeholder = "Departamento"/>*/}

                  {/*<label htmlFor="senha"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Senha atual"
                         onChange={(e) => setInput({ ...input, senhaAtual: e.target.value })}/>*/}

                  <label htmlFor="senha"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Nova senha"
                         onChange={(e) => setInput({ ...input, novaSenha: e.target.value })}/>

                  <label htmlFor="senha"></label><br/>
                  <input className = "text-center relative w-full mb-3 p-3 rounded-3xl" type="password" id="senha" name="senha" placeholder = "Confirmar nova senha"
                         onChange={(e) => setInput({ ...input, novaSenhaConfirma: e.target.value })}/>
                </form> 
                
                <button onClick={() => { setOpen(false); editUser() }} className="text-center bg-foreground mb-4 w-28 text-white p-3 rounded-xl">Salvar</button>
            </div>
        </div>
    ) : (
      <div className="hidden"></div>
    )}
      </>
  );
};

export default ModalPerfil;