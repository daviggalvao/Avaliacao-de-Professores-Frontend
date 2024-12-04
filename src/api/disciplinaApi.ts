import api from '../utils/api';

const postDisciplina = async () => {
    await api.post('/disciplina')
}

const getAllDisciplinas = async () => {
    await api.get('/disciplina')
}

const getDisciplina = async () => {
    await api.get(`/disciplina/1`)
}

const updateDisciplina = async () => {
    await api.patch(`/disciplina/1`)
}

const deleteDisciplina = async () => {
    await api.delete(`/disciplina/1`)
}