"use client";

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { UserData } from "@/types/User";
import { getToken } from "../utils/auth";
import Link from "next/link";
import styles from '../aa_extra/styles/login.module.css';

import Professor from '../components/entidades/Professor';
import { hookAllProfessores } from '../hooks/hookProfessores'; 
import { hookAllUsers } from '../hooks/hookUser'; 
import { IsAuthenticated, getStorageUser } from "../utils/auth";
import Header from '../components/layout/Header';
import ModalAvaliação from "@/components/modais/ModalAvaliação";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const professores = hookAllProfessores();
  const usuarios = hookAllUsers();

  //const sixMonthsAgo = new Date();
  //sixMonthsAgo.setDay(sixMonthsAgo.getMonth() - 6);


  // Criar uma nova data para 2 dias atrás
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  console.log(twoDaysAgo);

  return (
    <div>
      <Header/>

      <div className="bg-sky-100 w-screen min-h-screen">
          <div className="bg-sky-100 ml-4 flex justify-between items-center">
            {/* component modal de avaliacao no lugar do button | deslogado->login || logado -> modal avaliacao*/}
            <div className="mt-4 flex">
              {IsAuthenticated() ? (
                  <ModalAvaliação></ModalAvaliação>
                ) : (
                  <Link href="/auth/login">
                    <button className = "bg-foreground p-2 mr-3 text-white font-bold flex justify-center items-center rounded-xl">Nova Publicação</button>
                  </Link>
                )}
            </div>
            <input type="input" placeholder="Buscar Professor(a)" className="bg-white-100 mr-8  w-60 h-8 rounded-lg"/>
          </div>
        <div className = "flex flex-col items-center">
          <div className="NovosProfessores">
            <h1 className="ml-4 text-black text-4xl font-bold my-8">Novos Professores</h1>

            <div className="bg-sky-100 grid grid-cols-4 ml-4 gap-20">
              {professores.length > 0 ? (
                professores.filter((professor) => { 
                    return new Date(professor.createdAt) >= twoDaysAgo;
                  }
                ).map((professor) => (
                  <Professor key={professor.id} {...professor} />
                  )
                )
              ) : (
                <p className="ml-4 text-black">Nenhum professor encontrado.</p>
              )}
            </div>
          </div>

          <div className="TodosProfessores bg-sky-100">
            <h1 className = "ml-4 text-black font-bold my-8 text-4xl">Todos os Professores</h1>

            <div className="bg-sky-100 grid grid-cols-4 ml-4 gap-20">
              {professores.length > 0 ? (
                professores.map((professor) => (
                  <Professor key={professor.id} {...professor} />
                ))
              ) : (
                <p className="ml-4 text-black">Nenhum professor encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
