import api from '../utils/api';

const postUser = async () => {
    await api.post('/user')
}

const getAllUsers = async () => {
    await api.get('/user')
}

const getUser = async () => {
    await api.get(`/user/1`)
}

const updateUser = async () => {
    await api.patch(`/user/1`)
}

const deleteUser = async () => {
    await api.delete(`/user/1`)
}