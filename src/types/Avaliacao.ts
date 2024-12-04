// src/types/Avaliacao.ts
export interface Avaliacao {
    id: number; // Identificador único
    titulo: string; // Título da avaliação
    descricao: string; // Descrição da avaliação
    nota: number; // Nota atribuída
    data: string; // Data da avaliação (no formato ISO 8601)
    professorId: number; // ID do professor associado
    disciplinaId: number; // ID da disciplina associada
  }
  