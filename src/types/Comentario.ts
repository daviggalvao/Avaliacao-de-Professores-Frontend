// src/types/Comentario.ts
export interface CreateComentario {
  id: number; // Identificador único
  texto: string; // Texto do comentário
  data: string; // Data do comentário (no formato ISO 8601)
  userId: number; // ID do usuário que fez o comentário
  avaliacaoId: number; // ID da avaliação associada ao comentário
}

export interface UpdateComentario {
  texto?: string; // Texto do comentário
}
  