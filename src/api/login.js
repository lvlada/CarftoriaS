import axios from 'axios';

const login = async (email, password) => {
  try {
    const response = await axios.post('/api/login', {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export { login };
