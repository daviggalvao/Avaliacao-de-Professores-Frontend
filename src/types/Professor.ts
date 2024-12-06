// src/types/Professor.ts
export interface CreateProfessor {
  id: number; // Identificador único
  nome: string; // Nome do professor
  email: string; // E-mail do professor
  departamento: string; // Departamento associado
  DisciplinaID?: string;
  foto_perfil: string | null; // Foto de perfil (opcional)
}

// src/types/Professor.ts
export interface UpdateProfessor {
  nome?: string; // Nome do professor
  email?: string; // E-mail do professor
  DisciplinaID?: string;
  foto_perfil?: string | null; // Foto de perfil (opcional)
}

  