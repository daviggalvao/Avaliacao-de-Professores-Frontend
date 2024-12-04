import api from '../utils/api';

const postComentario = async () => {
    await api.post('/comentario')
}

const getAllComentarios = async () => {
    await api.get('/comentario')
}

const getComentario = async () => {
    await api.get(`/comentario/1`)
}

const updateComentario = async () => {
    await api.patch(`/comentario/1`)
}

const deleteComentario = async () => {
    await api.delete(`/comentario/1`)
}