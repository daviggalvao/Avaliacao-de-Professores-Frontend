import api from '../../utils/api';
import { CreateUser } from '../../types/User';
import { UpdateUser } from '../../types/User';


const postUser = async (dados: CreateUser) => {
    const response = await api.post('/user', dados)
    return response.data
}

const getAllUsers = async () => {
    const response = await api.get('/user')
    return response.data
}

const getUser = async (id: number) => {
    const response = await api.get(`/user/${id}`)
    return response.data
}

const updateUser = async (id: number, dados: UpdateUser) => {
    const response = await api.patch(`/user/${id}`, dados)
    return response.data
}

const deleteUser = async (id: number) => {
    const response = await api.delete(`/user/${id}`)
    return response.data
}