import api from '../utils/api';
import { Disciplina } from '../types/Disciplina';

const postDisciplina = async (dados: Disciplina) => {
    const response = await api.post('/disciplina', dados)
    return response.data
}

const getAllDisciplinas = async () => {
    await api.get('/disciplina')
}

const getDisciplina = async (id: number) => {
    await api.get(`/disciplina/${id}`)
}

const updateDisciplina = async (id: number, dados: Disciplina) => {
    const response = await api.patch(`/disciplina/${id}`, dados)
    return response.data
}

const deleteDisciplina = async (id: number) => {
    const response = await api.delete(`/disciplina/${id}`)
    return response.data
}