"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { loginUser } from "@/app/_api/authApi";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevents page reload

    try {
      const response = await loginUser(email, senha);
      console.log("Usuário autenticado com sucesso:", response);

      // Saving the token in localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      // Redirecting the user
      window.location.href = "/";
    } catch (error) {
      console.error("Erro na autenticação:", error);
      setError("Email ou senha inválidos. Por favor, tente novamente.");
    }
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-96 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <button
            type="submit"
            className="w-48 py-3 bg-foreground text-white rounded-xl hover:opacity-90 hover:scale-105 transition duration-200"
          >
            Entrar
          </button>
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
