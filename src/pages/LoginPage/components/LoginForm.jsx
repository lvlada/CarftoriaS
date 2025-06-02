import { IconGoogle } from '@/assets';
import { Input, Button } from '@/components';
import { Link } from 'react-router';
import style from './LoginForm.module.scss';
const LoginForm = () => {
  return (
    <div className={style.loginForm__container}>
      <h1 className={style.loginForm__title}>Dobrodošli nazad!</h1>
      <p>Ulogujte se na svoj profil</p>
      <form className={style.loginForm__inputs}>
        <Input placeholder={'Email adreasa'} type="email" className={style.input} />
        <Input placeholder={'Šifra'} type="password" className={style.input} />
      </form>
      <Link>Zaboraviljena šifra?</Link>
      <Button type="submit">Uloguj se</Button>
      <p>ili nastavi sa</p>
      <Button variant="outline" icon={<IconGoogle />} className={style.loginForm__btn}>
        Google
      </Button>
      <p>
        Nemate nalog?
        <span>
          <Link>Kreirajte novi nalog.</Link>
        </span>
      </p>
    </div>
  );
};

export { LoginForm };
