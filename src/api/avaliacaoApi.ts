import api from '../utils/api';

const postAvaliacao = async () => {
    await api.post('/avaliacao')
}

const getAllAvaliacoes = async () => {
    await api.get('/avaliacao')
}

const getAvaliacao = async () => {
    await api.get(`/avaliacao/1`)
}

const updateAvaliacao = async () => {
    await api.patch(`/avaliacao/1`)
}

const deleteAvaliacao = async () => {
    await api.delete(`/avaliacao/1`)
}