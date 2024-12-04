import api from '../utils/api';

const postComentario = async (dados: Comentario) => {
    const response = await api.post('/comentario', dados)
    return response.data
}

const getAllComentarios = async () => {
    await api.get('/comentario')
}

const getComentario = async (id: number) => {
    await api.get(`/comentario/${id}`)
}

const updateComentario = async (id: number, dados: Comentario) => {
    const response = await api.patch(`/comentario/${id}`, dados)
    return response.data
}

const deleteComentario = async (id: number) => {
    const response = await api.delete(`/comentario/${id}`)
    return response.data
}