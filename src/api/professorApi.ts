import api from '../utils/api';
import { CreateProfessor } from '../types/Professor';
import { UpdateProfessor } from '../types/Professor';

const postProfessor = async (dados: CreateProfessor) => {
    const response = await api.post('/professor', dados)
    return response.data
}

const getAllProfessores = async () => {
    const response = await api.get('/professor')
    return response.data
}

const getProfessor = async (id: number) => {
    const response = await api.get(`/professor/${id}`)
    return response.data
}

const updateProfessor = async (id: number, dados: UpdateProfessor) => {
    const response = await api.patch(`/professor/${id}`, dados)
    return response.data
}

const deleteProfessor = async (id: number) => {
    const response = await api.delete(`/professor/${id}`)
    return response.data
}