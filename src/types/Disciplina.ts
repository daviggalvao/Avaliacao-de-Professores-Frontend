// src/types/Disciplina.ts
export interface CreateDisciplina {
  id: number; // Identificador único
  nome: string; // Nome da disciplina
  codigo: string; // Código da disciplina (ex: "MAT101")
  carga_horaria: number; // Carga horária em horas
  professorId: string; // ID do professor responsável
}

export interface UpdateDisciplina {
  carga_horaria?: number; // Carga horária em horas
  professorId?: string; // ID do professor responsável
}
  