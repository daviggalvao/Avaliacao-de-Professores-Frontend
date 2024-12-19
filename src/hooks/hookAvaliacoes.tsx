/*import React, { useEffect, useState } from 'react';
import { getUserPublications } from '../app/_api/userApi';;

const UserPublications = ({ userId }: { userId: number }) => {
  const [publications, setPublications] = useState<{
    avaliacoes: any[];
    comentarios: any[];
  } | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      const data = await getUserPublications(userId);
      setPublications(data);
    };

    fetchPublications();
  }, [userId]);

  if (!publications) return <p>Carregando publicações...</p>;

  return (
    <div>
      <h1>Avaliações</h1>
      {publications.avaliacoes.length > 0 ? (
        publications.avaliacoes.map((avaliacao) => (
          <div key={avaliacao.id}>
            <h2>Disciplina: {avaliacao.disciplina}</h2>
            <p>{avaliacao.conteudo}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma avaliação encontrada.</p>
      )}

      <h1>Comentários</h1>
      {publications.comentarios.length > 0 ? (
        publications.comentarios.map((comentario) => (
          <div key={comentario.id}>
            <h2>Avaliação relacionada: {comentario.avaliacao?.disciplina}</h2>
            <p>{comentario.conteudo}</p>
          </div>
        ))
      ) : (
        <p>Nenhum comentário encontrado.</p>
      )}
    </div>
  );
};

export default UserPublications; */
