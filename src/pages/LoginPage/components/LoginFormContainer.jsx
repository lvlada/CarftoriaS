import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoginForm } from './LoginForm';
import { login } from '@/api';
import { useAuthStore } from '@/store';

const LoginFormContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin } = useAuthStore();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);

      if (data && data.token) {
        userLogin(data.user || {}, data.token);
        console.log('Login successful for:', email);
        navigate('/');
        console.log(data.token);
      } else {
        console.error('Login failed: No token received');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  return (
    <LoginForm
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      login={handleLogin}
      googleLogin={handleGoogleLogin}
    />
  );
};

export { LoginFormContainer };
