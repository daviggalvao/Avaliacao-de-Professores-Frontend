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
    <div className="Header">
      <Header/>
    </div>

    <div className="AreaProfessores">

      <div className="TodosOsAlunos">
        <h1 className = {styles.title}>Todos os Usuários</h1>

        <div className="TodosAlunos">
          {usuarios.length > 0 ? (
            usuarios.map((user) => (
              <h1>{user.nome}, {user.email}, {user.curso}</h1>
            ))
          ) : (
            <p>Nenhum usuário encontrado.</p>
          )}
        </div>
      </div>

      <div className="NovosProfessores">
        <h1 className={styles.title}>Novos Professores</h1>

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
            <p>Nenhum professor encontrado.</p>
          )}
        </div>
      </div>

      <div className="TodosProfessores">
        <h1 className = {styles.title}>Todos os Professores</h1>

        <button className = "NovaPublicacao">Nova Publicação</button>
        <button className = "Ordenar">Ordenar</button>

        <div className="cardsTodosProfesores">
          {professores.length > 0 ? (
            professores.map((professor) => (
              <Professor key={professor.id} {...professor} />
            ))
          ) : (
            <p>Nenhum professor encontrado.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
