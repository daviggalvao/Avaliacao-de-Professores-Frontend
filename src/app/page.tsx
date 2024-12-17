"use client";

import Image from "next/image";
import Link from "next/link";
import styles from '../aa_extra/styles/login.module.css';

import Professor from '../components/entidades/Professor';
import { hookAllProfessores } from '../hooks/hookProfessores'; 
import { hookAllUsers } from '../hooks/hookUser'; 

import Header from '../components/layout/Header';

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
    
    <div className="bg-sky-100 h-screen">

        <div className="flex justify-between items-center">
          <div className="w-80 ml-4 flex justify-center items-center">
            <input
              type="text"
              className="bg-white border-black w-full text-black roundend-2xl p-2 mt-4"
              placeholder="Buscar Professor(a)"
            ></input>
          </div>
          {/* component modal de avaliacao no lugar do button | deslogado->login || logado -> modal avaliacao*/}
          <div>
            <button className = "bg-foreground p-2 mr-3 text-white font-bold flex justify-center items-center rounded-xl">Nova Publicação</button>
          </div>
          
        </div>
      <div className="NovosProfessores">
        <h1 className="text-center text-black font-bold my-8">Novos Professores</h1>

        <div className="cardsNovosProfesores">
          {professores.length > 0 ? (
            professores.filter((professor) => { 
                return new Date(professor.createdAt) >= twoDaysAgo;
              }
            ).map((professor) => (
              <Professor key={professor.id} {...professor} />
              )
            )
          ) : (
            <p className="text-center text-black">Nenhum professor encontrado.</p>
          )}
        </div>
      </div>

      <div className="TodosProfessores">
        <h1 className = "text-center text-black font-bold my-8">Todos os Professores</h1>

        <div className="cardsTodosProfesores">
          {professores.length > 0 ? (
            professores.map((professor) => (
              <Professor key={professor.id} {...professor} />
            ))
          ) : (
            <p className="text-center text-black">Nenhum professor encontrado.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
