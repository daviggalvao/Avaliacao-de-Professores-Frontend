import api from '../../utils/api';
import { AvaliacaoData } from '../../types/Avaliacao';
import { UpdateAvaliacao } from '../../types/Avaliacao';

export const postAvaliacao = async (dados: AvaliacaoData) => {
    const response = await api.post('/avaliacao', dados)
    return response.data
}

export const getAllAvaliacoes = async (): Promise<AvaliacaoData[]> => {
    const response = await api.get('/avaliacao')
    return response.data
}

export const getAvaliacao = async (id: number): Promise<AvaliacaoData> => {
    const response = await api.get(`/avaliacao/${id}`)
    return response.data
}

export const updateAvaliacao = async (id: number, dados: UpdateAvaliacao) => {
    const response = await api.patch(`/avaliacao/${id}`, dados)
    return response.data
}

export const deleteAvaliacao = async (id: number) => {
    const response = await api.delete(`/avaliacao/${id}`)
    return response.data
}