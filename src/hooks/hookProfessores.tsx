import { useEffect, useState } from 'react';
import { getAllProfessores } from '../app/_api/professorApi';
import { ProfessorData } from '../types/Professor';

export function hookAllProfessores() {
  const [professores, setProfessores] = useState<ProfessorData[]>([]);

  useEffect(() => {
    const fetchProfessores = async () => {
      const data = await getAllProfessores();
      setProfessores(data);
    };
    fetchProfessores();
  }, []);

  return professores;
}
