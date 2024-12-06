import api from '../utils/api';
import { CreateComentario } from '../types/Comentario';
import { UpdateComentario } from '../types/Comentario';

const postComentario = async (dados: CreateComentario) => {
    const response = await api.post('/comentario', dados)
    return response.data
}

const getAllComentarios = async () => {
    const response = await api.get('/comentario')
    return response.data
}

const getComentario = async (id: number) => {
    const response = await api.get(`/comentario/${id}`)
    return response.data
}

const updateComentario = async (id: number, dados: UpdateComentario) => {
    const response = await api.patch(`/comentario/${id}`, dados)
    return response.data
}

const deleteComentario = async (id: number) => {
    const response = await api.delete(`/comentario/${id}`)
    return response.data
}