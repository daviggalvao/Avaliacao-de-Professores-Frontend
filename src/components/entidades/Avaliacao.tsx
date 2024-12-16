import React from 'react'
import { AvaliacaoData } from '../../types/Avaliacao'; 
import { hookUserID } from '@/hooks/hookUser';
import Link from "next/link";
import Image from "next/image";
import styles from '../aa_extra/styles/feed.module.css';

const Avaliacao = ( Avaliacao : AvaliacaoData) => {
  const user = hookUserID(Avaliacao.usuarioID)
  return (
    <div className = " m-auto mt-10 bg-green-500 rounded-lg w-2/3">
      <h3 className = "text-xs font-bold">{user?.nome}</h3>

      <h4 className="text-xs font-bold">
        {Avaliacao.createdAt
          ? new Date(Avaliacao.createdAt).toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })
          : 'Data não disponível'}
      </h4>

      <h4 className = "text-xs font-bold">{Avaliacao.professor}</h4>
      <h4 className = "text-xs font-bold">{Avaliacao.disciplina}</h4>
      <p>{Avaliacao.conteudo}</p>

      <Link href={`/Avaliacao/${Avaliacao.id}`}>
        <p>{Avaliacao.Comentarios.length} comentários</p>
      </Link>
    </div>
  )
}

export default Avaliacao;