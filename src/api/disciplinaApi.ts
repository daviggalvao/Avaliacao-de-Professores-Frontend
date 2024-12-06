import api from '../utils/api';
import { CreateDisciplina } from '../types/Disciplina';
import { UpdateDisciplina } from '../types/Disciplina';

const postDisciplina = async (dados: CreateDisciplina) => {
    const response = await api.post('/disciplina', dados)
    return response.data
}

const getAllDisciplinas = async () => {
    const response = await api.get('/disciplina')
    return response.data
}

const getDisciplina = async (id: number) => {
    const response = await api.get(`/disciplina/${id}`)
    return response.data
}

const updateDisciplina = async (id: number, dados: UpdateDisciplina) => {
    const response = await api.patch(`/disciplina/${id}`, dados)
    return response.data
}

const deleteDisciplina = async (id: number) => {
    const response = await api.delete(`/disciplina/${id}`)
    return response.data
}