import { ComentarioData } from '../types/Comentario'

export interface AvaliacaoData {
  id?: number;
  conteudo: string;  
  professor: string; 
  usuarioID: number;
  disciplina: string; 
  Comentarios: ComentarioData[];

  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateAvaliacao {
  conteudo?: string; 
}
  