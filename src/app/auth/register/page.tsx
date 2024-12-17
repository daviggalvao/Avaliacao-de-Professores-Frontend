"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
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
    <div className="flex min-h-screen">
      <div className="flex-1 relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Grupo de estudantes em uma roda"
          className="object-cover w-full h-full"
          layout="fill"
        />
      </div>
      <div className="flex flex-1 flex-col bg-background justify-center items-center p-8">
        <h1 className="text-white text-4xl mb-6">Avaliação de Professores</h1>

        <form className="flex flex-col space-y-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            className="w-96 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            onChange={(e) => setInput({ ...input, senha: e.target.value })}
            className="w-96 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            onChange={(e) => setInput({ ...input, nome: e.target.value })}
            className="w-96 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <input
            type="text"
            id="curso"
            name="curso"
            placeholder="Curso"
            onChange={(e) => setInput({ ...input, curso: e.target.value })}
            className="w-96 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <input
            type="text"
            id="departamento"
            name="departamento"
            placeholder="Departamento"
            onChange={(e) =>
              setInput({ ...input, departamento: e.target.value })
            }
            className="w-96 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <button
            onClick={createUser}
            className="w-48 py-3 bg-foreground text-white rounded-xl hover:opacity-90 hover:scale-105 transition duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
