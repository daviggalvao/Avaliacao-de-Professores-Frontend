import { useEffect, useState } from 'react';
import { getAllProfessores } from '../app/_api/professorApi';
import { ProfessorData } from '../types/Professor';

export function useProfessores() {
  const [professores, setProfessores] = useState<ProfessorData[]>([]);

  /*const getAllUsers = async () => {
    try {
      const users = await getAllProfessores();
      console.log(users)
      setProfessores(users)
    } catch (error) {
      
    }
  }*/

  useEffect(() => {
    const fetchProfessores = async () => {
      const data = await getAllProfessores();
      setProfessores(data);
    };
    fetchProfessores();
  }, []);

  return professores;
}
