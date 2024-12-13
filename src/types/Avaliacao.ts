import { ComentarioData } from '../types/Comentario'

export interface AvaliacaoData {
  id?: number;
  conteudo: string;  
  professorID: number; 
  usuarioID: number;
  disciplinaID: number; 
  Comentarios: ComentarioData[];

  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateAvaliacao {
  conteudo?: string; 
}
  