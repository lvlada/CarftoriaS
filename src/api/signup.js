import axios from 'axios';

const signup = async (fullName, email, password, isCraftman) => {
  try {
    const response = await axios.post('/api/signup', null, {
      params: {
        fullName,
        email,
        password,
        isCraftman
      }
    });
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export { signup };
