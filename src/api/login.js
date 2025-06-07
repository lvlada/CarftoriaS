import axios from 'axios';

const login = async (email, password) => {
  try {
    const response = await axios.post(`http://63.178.38.11:8080/CraftoriaS/api/login`, null, {
      params: { email, password }
    });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export { login };
