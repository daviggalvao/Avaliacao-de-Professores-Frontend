import api from '../../utils/api';
import { ComentarioData } from '../../types/Comentario';
import { UpdateComentario } from '../../types/Comentario';

export const postComentario = async (dados: ComentarioData) => {
    const response = await api.post('/comentario', dados)
    return response.data
}

export const getAllComentarios = async (): Promise<ComentarioData[]> => {
    const response = await api.get('/comentario')
    return response.data
}

export const getComentario = async (id: number): Promise<ComentarioData> => {
    const response = await api.get(`/comentario/${id}`)
    return response.data
}

export const updateComentario = async (id: number, dados: UpdateComentario) => {
    const response = await api.patch(`/comentario/${id}`, dados)
    return response.data
}

export const deleteComentario = async (id: number) => {
    const response = await api.delete(`/comentario/${id}`)
    return response.data
}