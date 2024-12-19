"use client";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoUnb from "../../../assets/logounb.png";
import "../../globals.css";
import styles from "../../../aa_extra/styles/login.module.css";
import { getStorageUser } from "@/utils/auth";
import { updateUser } from "@/app/_api/userApi";

export default function PatchUser() {
  const user = getStorageUser();
  const [input, setInput] = useState({
    email: user?.email || "",
    nome: user?.nome || "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
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
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editUser();
        }}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <div className="flex justify-center mb-6">
          <Image src={logoUnb} alt="Logo UnB" width={100} height={50} />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-4">
          Atualizar Perfil
        </h2>

        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium mb-2">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={input.nome}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="senha" className="block text-sm font-medium mb-2">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={input.senha}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Atualizar
        </button>
      </form>
    </div>
  );
}
