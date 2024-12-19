"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";

import logoUnb from "../../../assets/logounb.png";
import "../../globals.css";
import styles from "../../../aa_extra/styles/login.module.css";

import { registerUser } from "@/app/_api/authApi";

export default function SignIn() {
  const [input, setInput] = useState({
    email: "",
    nome: "",
    senha: "",
    curso: "",
    departamento: "",
  });

  const createUser = async () => {
    try {
      await registerUser(input);
    } catch (error) {}
  };

  return (

    <div className="flex h-screen">
      <div className="bg-foreground flex flex-col justify-center items-center">
        <Image
          src={logoUnb}
          alt="Logo UnB"
          className="flex basis-1/4 h-1/2 w-1/2"
          width={500}
          height={500}
        />
      </div>

      <div className="flex basis-2/4 flex-col justify-center items-center bg-background">
        <h1 className="text-center text-white text-5xl">
          Avaliação de Professores
        </h1>
        <form className="text-black w-3/5 my-4">
          <input
            type="text"
            className="text-center relative w-full mb-3 p-5 rounded-3xl"
            placeholder="Email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <input
            type="text"
            className="text-center relative w-full mb-3 p-5 rounded-3xl"
            placeholder="Nome"
            onChange={(e) => setInput({ ...input, nome: e.target.value })}
          />
          <input
            type="text"
            className="text-center relative w-full mb-3 p-5 rounded-3xl"
            placeholder="Senha"
            onChange={(e) => setInput({ ...input, senha: e.target.value })}
          />
          <input
            type="text"
            className="text-center relative w-full mb-3 p-5 rounded-3xl"
            placeholder="Curso"
            onChange={(e) => setInput({ ...input, curso: e.target.value })}
          />
          <input
            type="text"
            className="text-center relative w-full p-5 rounded-3xl"

            placeholder="Departamento"
            onChange={(e) =>
              setInput({ ...input, departamento: e.target.value })
            }

          />
        </form>
        <div className="flex justify-center items-center w-1/4">
          <button
            onClick={createUser}
            className="text-center bg-foreground text-white p-4 w-3/4 rounded-2xl"
          >
            Criar
          </button>
        </div>

      </div>
    </div>
  );
}
