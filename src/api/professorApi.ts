import api from '../utils/api';

const postProfessor = async () => {
    await api.post('/professor')
}

const getAllProfessores = async () => {
    await api.get('/professor')
}

const getProfessor = async () => {
    await api.get(`/professor/1`)
}

const updateProfessor = async () => {
    await api.patch(`/professor/1`)
}

const deleteProfessor = async () => {
    await api.delete(`/professor/1`)
}