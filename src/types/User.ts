// src/types/User.ts
export interface User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    curso: string;
    departamento: string;
    foto_perfil: string | null;  // Caso o campo seja opcional ou nulo
  }
  