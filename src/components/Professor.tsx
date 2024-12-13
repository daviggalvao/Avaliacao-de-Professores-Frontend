import React from 'react'
import { ProfessorData } from '../types/Professor'; 
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/feed.module.css';

const Professor = ( Professor : ProfessorData) => {
  return (
    <div className = {styles.moldeprof}>
      <div className="FotoProfessor">
        <Image src={Professor.foto_perfil || 'src/assets/default_profile_picture.png'} alt="Foto do Professor" 
        className = {styles.imagemprof} width={50} height={50}/>
      </div>
      
      <div className="nomeProfessor">
        <Link href={`/professores/${Professor.id}`}>
          <h1>{Professor.nome}</h1>
        </Link>
      </div>

      <div className='disciplinaProfessor'>
        <p>{Professor.disciplinaID}</p>
      </div>
    </div>
  )
}

export default Professor;