import api from '../utils/api';

const getUser = async () => {
    await api.get(`/user/1`)
}

const getAll = async () => {
    api.get('/users')
}