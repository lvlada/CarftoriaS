import { Button, Input, Select } from '@/components';
import style from './RegisterForm.module.scss';
import { useState } from 'react';
import { z } from 'zod';
import { signup } from '@/api';

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

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    isCraftman: false,
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    setFormSubmitted(true);

    try {
      registerSchema.parse(formData);
      console.log('Form submitted successfully:', formData);
      signup(formData.fullName, formData.email, formData.password, formData.isCraftman);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <form className={style.registerForm} onSubmit={handleSubmit}>
      <Select
        options={['Zanatlija', 'Korisnik']}
        name="isCraftman"
        value={formData.isCraftman ? 'Zanatlija' : 'Korisnik'}
        onChange={handleSelectChange}
      />
      <div>
        <Input
          placeholder={'Ime i prezime'}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.fullName && <p className={style.errorMessage}>{errors.fullName}</p>}
        <Input
          placeholder={'Email adresa'}
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className={style.errorMessage}>{errors.email}</p>}

        <Input
          placeholder={'Šifra'}
          value={formData.password}
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p className={style.errorMessage}>{errors.password}</p>}
      </div>
      <Button type="submit" disabled={formSubmitted}>
        Kreirajte nalog
      </Button>
    </form>
  );
};

export { RegisterForm };
