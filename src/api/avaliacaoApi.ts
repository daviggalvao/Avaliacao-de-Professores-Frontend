import api from '../utils/api';
import { Avaliacao } from '../types/Avaliacao';

const postAvaliacao = async (dados: Avaliacao) => {
    const response = await api.post('/avaliacao', dados)
    return response.data
}

const getAllAvaliacoes = async () => {
    await api.get('/avaliacao')
}

const getAvaliacao = async (id: number) => {
    await api.get(`/avaliacao/${id}`)
}

const updateAvaliacao = async (id: number, dados: Avaliacao) => {
    const response = await api.patch(`/avaliacao/${id}`, dados)
    return response.data
}

const deleteAvaliacao = async (id: number) => {
    const response = await api.delete(`/avaliacao/${id}`)
    return response.data
}