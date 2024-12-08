import api from '../../utils/api';
import { CreateAvaliacao } from '../../types/Avaliacao';
import { UpdateAvaliacao } from '../../types/Avaliacao';

const postAvaliacao = async (dados: CreateAvaliacao) => {
    const response = await api.post('/avaliacao', dados)
    return response.data
}

const getAllAvaliacoes = async () => {
    const response = await api.get('/avaliacao')
    return response.data
}

const getAvaliacao = async (id: number) => {
    const response = await api.get(`/avaliacao/${id}`)
    return response.data
}

const updateAvaliacao = async (id: number, dados: UpdateAvaliacao) => {
    const response = await api.patch(`/avaliacao/${id}`, dados)
    return response.data
}

const deleteAvaliacao = async (id: number) => {
    const response = await api.delete(`/avaliacao/${id}`)
    return response.data
}