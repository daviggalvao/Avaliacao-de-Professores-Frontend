"use client";

import Image from "next/image";
import Link from "next/link";
import styles from '../aa_extra/styles/login.module.css';

import Professor from '../components/entidades/Professor';
import { hookAllProfessores } from '../hooks/hookProfessores'; 
import { hookAllUsers } from '../hooks/hookUser'; 

import Header from '../components/layout/Header';
import ModalAvaliação from "@/components/modais/ModalAvaliação";

export default function Home() {
  const professores = hookAllProfessores();
  const usuarios = hookAllUsers();

  //const sixMonthsAgo = new Date();
  //sixMonthsAgo.setDay(sixMonthsAgo.getMonth() - 6);

  const today = new Date();

  // Criar uma nova data para 2 dias atrás
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  console.log(twoDaysAgo);

  return (
  <div>
    <Header/>
    
    <div className="bg-sky-100 h-screen w-screen">
        <div className="bg-sky-100 ml-4 flex justify-between items-center">
          {/* component modal de avaliacao no lugar do button | deslogado->login || logado -> modal avaliacao*/}
          <div className="mt-4">
            <ModalAvaliação/>
          </div>
          
        </div>
      <div className="NovosProfessores">
        <h1 className="ml-4 text-black font-bold my-8">Novos Professores</h1>

        <div className="bg-sky-100 grid grid-cols-4 ml-4">
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
        <h1 className = "ml-4 text-black font-bold my-8">Todos os Professores</h1>

        <div className="bg-sky-100 grid grid-cols-4 ml-4">
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
  );
}
