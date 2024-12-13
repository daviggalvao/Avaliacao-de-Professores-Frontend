import api from '../../utils/api';
import { UserData } from '../../types/User';
import { UpdateUser } from '../../types/User';

export const postUser = async (dados: UserData) => {
    const response = await api.post('/user', dados);
    return response.data;
}

export const getAllUsers = async (): Promise<UserData[]> => {
    const response = await api.get('/user');
    return response.data;
}

export const getUser = async (id: number): Promise<UserData> => {
    const response = await api.get(`/user/${id}`);
    return response.data;
}

export const getUserByEmail = async (email: string): Promise<UserData> => {
    const response = await api.get(`/user/email/${email}`);
    return response.data;
}

export const updateUser = async (id: number, dados: UpdateUser) => {
    const response = await api.patch(`/user/${id}`, dados);
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await api.delete(`/user/${id}`);
    return response.data;
}