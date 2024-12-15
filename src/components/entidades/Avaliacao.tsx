import React from 'react'
import { AvaliacaoData } from '../../types/Avaliacao'; 
import Link from "next/link";
import Image from "next/image";
import styles from '../aa_extra/styles/feed.module.css';

const Avaliacao = ( Avaliacao : AvaliacaoData) => {
  return (
    <div className = " m-auto mt-10 bg-green-500 rounded-lg w-2/3">
      <h3 className = "text-xs font-bold">{Avaliacao.usuarioID}</h3>
      <p>{Avaliacao.conteudo}</p>

      <Link href={`/Avaliacao/${Avaliacao.id}`}>
        <p>{Avaliacao.Comentarios.length} comentários</p>
      </Link>
    </div>
  )
}

export default Avaliacao;