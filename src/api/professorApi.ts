import api from '../utils/api';
import { Professor } from '../types/Professor';

const postProfessor = async (dados: Professor) => {
    const response = await api.post('/professor', dados)
    return response.data
}

const getAllProfessores = async () => {
    await api.get('/professor')
}

const getProfessor = async (id: number) => {
    await api.get(`/professor/${id}`)
}

const updateProfessor = async (id: number, dados: Professor) => {
    const response = await api.patch(`/professor/${id}`, dados)
    return response.data
}

const deleteProfessor = async (id: number) => {
    const response = await api.delete(`/professor/${id}`)
    return response.data
}