'use client';

import Image from "next/image";
import Link from "next/link";
import styles from './styles/login.module.css';

import Professor from '../components/Professor';
import { useProfessores } from '../hooks/hookProfessores'; 

import Header from '../components/Header';

export default function Home() {
  const professores = useProfessores();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  /*professores.filter((professor) => { return new Date(professor.createdAt) >= sixMonthsAgo;}).map((professor) => (<Professor key={professor.id} {...professor} />))*/

  return (
  <div>
    {/* Header é onde há os botões para o perfil do usuário, caso haja um usuário, porém preciso passar alguma coisa para o Header*/}
    <div className="Header">
      <Header {...user}/>
    </div>

    <div className="AreaProfessores">

      <div className="NovosProfessores">
        <h1 className={styles.title}>Novos Professores</h1>

        <div className="cardsNovosProfesores">
          {professores.length > 0 ? (
            professores.filter((professor) => { 
                return new Date(professor.createdAt) >= sixMonthsAgo;
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
