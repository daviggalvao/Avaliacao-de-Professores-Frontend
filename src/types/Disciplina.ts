// src/types/Disciplina.ts
export interface Disciplina {
    id: number; // Identificador único
    nome: string; // Nome da disciplina
    codigo: string; // Código da disciplina (ex: "MAT101")
    carga_horaria: number; // Carga horária em horas
    professorId: number; // ID do professor responsável
  }
  