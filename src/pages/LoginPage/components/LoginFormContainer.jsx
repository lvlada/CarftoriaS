import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoginForm } from './LoginForm';

const LoginFormContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Login successful for:', email);

      navigate('/');
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
