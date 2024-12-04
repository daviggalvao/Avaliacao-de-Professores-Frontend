import api from '../utils/api';
import { User } from '../types/User';

const postUser = async (dados: User) => {
    const response = await api.post('/user', dados)
    return response.data
}

const getAllUsers = async () => {
    await api.get('/user')
}

const getUser = async (id: number) => {
    await api.get(`/user/${id}`)
}

const updateUser = async (id: number, dados: User) => {
    const response = await api.patch(`/user/${id}`, dados)
    return response.data
}

const deleteUser = async (id: number) => {
    const response = await api.delete(`/user/${id}`)
    return response.data
}