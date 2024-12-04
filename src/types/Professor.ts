// src/types/Professor.ts
export interface Professor {
    id: number; // Identificador único
    nome: string; // Nome do professor
    email: string; // E-mail do professor
    departamento: string; // Departamento associado
    especialidade: string; // Especialidade do professor
    foto_perfil: string | null; // Foto de perfil (opcional)
  }
  