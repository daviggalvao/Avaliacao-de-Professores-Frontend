import React, { useEffect, useState } from "react";
import Image from "next/image";
import defaultFoto from '../../assets/fotodefault.svg';
import { getStorageUser } from "@/utils/auth";
import { updateUser } from "@/app/_api/userApi";

const ModalPerfil = () => {
  const user = getStorageUser();
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState({
    nome: "",
    email: "",
    senhaAtual: "",
    novaSenha: "",
    novaSenhaConfirma: "",
  });

  // Função para abrir o modal e inicializar os valores
  const handleOpen = () => {
    if (user) {
      setInput({
        nome: user.nome || "",
        email: user.email || "",
        senhaAtual: "",
        novaSenha: "",
        novaSenhaConfirma: "",
      });
    }
    setOpen(true);
  };

  const editUser = async () => {
    if (!user || !user.id) {
      console.error("Usuário não encontrado ou ID inválido.");
      return;
    }

    try {
      await updateUser(user.id, input);
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  return (
    <>
      {/* Botão para abrir o modal */}
      <button
        onClick={handleOpen}
        className="text-black bg-green-400 px-1 py-1 rounded-2xl w-30 h-8 flex justify-center items-center cursor-pointer text-lg border-2 border-black mb-1 font-light"
      >
        Editar perfil
      </button>

      {/* Modal */}
      {open ? (
        <div className="h-full w-full bg-black/40 fixed top-0 left-0 flex flex-col justify-center items-center">
          <div className="bg-background rounded-xl flex flex-col justify-center items-center relative w-1/3">
            <div
              onClick={() => setOpen(false)}
              className="text-[#aaa] absolute right-3 cursor-pointer top-3 text-3xl font-bold"
            >
              &times;
            </div>

            <Image
              src={defaultFoto}
              alt="Foto de perfil não cadastrada"
              className="mt-4 rounded-full cursor-pointer"
              width={100}
              height={100}
            />

            <form className="text-black w-4/5">
              <input
                className="text-center relative w-full mb-3 p-3 rounded-3xl"
                type="name"
                placeholder="Nome"
                value={input.nome}
                onChange={(e) => setInput({ ...input, nome: e.target.value })}
              />
              <input
                className="text-center relative w-full mb-3 p-3 rounded-3xl"
                type="email"
                placeholder="Email"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
              <input
                className="text-center relative w-full mb-3 p-3 rounded-3xl"
                type="password"
                placeholder="Senha atual"
                onChange={(e) => setInput({ ...input, senhaAtual: e.target.value })}
              />
              <input
                className="text-center relative w-full mb-3 p-3 rounded-3xl"
                type="password"
                placeholder="Nova senha"
                onChange={(e) => setInput({ ...input, novaSenha: e.target.value })}
              />
              <input
                className="text-center relative w-full mb-3 p-3 rounded-3xl"
                type="password"
                placeholder="Confirmar nova senha"
                onChange={(e) => setInput({ ...input, novaSenhaConfirma: e.target.value })}
              />
            </form>

            <button
              onClick={() => {
                setOpen(false);
                editUser();
              }}
              className="text-center bg-foreground mb-4 w-28 text-white p-3 rounded-xl"
            >
              Salvar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalPerfil;
