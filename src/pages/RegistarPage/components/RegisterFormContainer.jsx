import { useState, useEffect } from 'react';
import { RegisterForm } from './RegisterForm';
import { z } from 'zod';
import { signup } from '@/api';
import { useNavigate } from 'react-router';

const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Ime mora sadržati najmanje 3 karaktera')
    .max(20, 'Ime ne može biti duže od 20 karaktera')
    .nonempty('Ime je obavezno'),
  email: z.string().email('Unesite validnu email adresu').nonempty('Email je obavezan'),
  password: z
    .string()
    .min(8, 'Šifra mora sadržati najmanje 8 karaktera')
    .regex(/[A-Za-z]/, 'Šifra mora sadržati najmanje jedno slovo')
    .regex(/[0-9]/, 'Šifra mora sadržati najmanje jedan broj')
    .regex(/[^A-Za-z0-9]/, 'Šifra mora sadržati najmanje jedan specijalni karakter')
    .nonempty('Šifra je obavezna'),
  isCraftman: z.boolean()
});

const RegisterFormContainer = () => {
  const [formData, setFormData] = useState({
    isCraftman: false,
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    try {
      registerSchema.parse(formData);
    } catch (error) {
      console.log(error);
    }
  }, [formData]);

  const validateField = (name, value) => {
    try {
      registerSchema.shape[name].parse(value);
      setErrors((prev) => ({ ...prev, [name]: '' }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [name]: error.errors[0].message }));
        return false;
      }
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (e) => {
    const isCraftmanValue = e.target.value === 'Zanatlija';
    setFormData((prevData) => ({
      ...prevData,
      isCraftman: isCraftmanValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      registerSchema.parse(formData);
      console.log('Form submitted successfully:', formData);
      signup(formData.fullName, formData.email, formData.password, formData.isCraftman);
      alert('Vaš nalog je uspešno kreiran!');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    }
    navigate('/');
  };

  return (
    <RegisterForm
      formData={formData}
      errors={errors}
      onSubmit={handleSubmit}
      onSelectCraftman={handleSelectChange}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export { RegisterFormContainer };
