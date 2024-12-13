import api from '../../utils/api';

export const authUser = async (email: string, senha: string): Promise<{ token: string }> => {
  const response = await api.post('/auth/login', { email, senha });
  return response.data;
};
