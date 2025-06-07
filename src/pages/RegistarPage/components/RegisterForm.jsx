import { Button, Input, Select } from '@/components';
import style from './RegisterForm.module.scss';

const RegisterForm = ({ formData, errors, onSubmit, onSelectCraftman, onChange, onBlur }) => {
  return (
    <form className={style.registerForm} onSubmit={onSubmit}>
      <Select
        options={['Zanatlija', 'Korisnik']}
        name="isCraftman"
        value={formData.isCraftman ? 'Zanatlija' : 'Korisnik'}
        onChange={onSelectCraftman}
      />
      <div>
        <Input
          placeholder={'Ime i prezime'}
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errors.fullName && <p className={style.errorMessage}>{errors.fullName}</p>}
        <Input
          placeholder={'Email adresa'}
          name="email"
          value={formData.email}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errors.email && <p className={style.errorMessage}>{errors.email}</p>}

        <Input
          placeholder={'Šifra'}
          value={formData.password}
          type="password"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
        />
        {errors.password && <p className={style.errorMessage}>{errors.password}</p>}
      </div>
      <Button type="submit">Kreirajte nalog</Button>
    </form>
  );
};

export { RegisterForm };
