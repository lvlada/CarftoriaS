import { Button } from '@/components';
import { RegisterFormContainer } from './components';
import style from './RegisterPage.module.scss';
import { Link } from 'react-router';
import { IconGoogle } from '@/assets';

const RegisterPage = () => {
  return (
    <div className={style.registerPage}>
      <div className={style.registerPage__wrapper}>
        <h1 className={style.registerPage__title}>Kreirajte novi nalog</h1>
        <p className={style.registerPage__subTitle}>
          Registrujte se na platformu kao zanatlija ukoliko nudite usluge ili kao korisnik ukoliko
          ih tražite.
        </p>
        <RegisterFormContainer />
        <p className={style.registerPage__continue}>ili nastavi sa</p>
        <Button variant="outline" icon={<IconGoogle />} className={style.registerPage__btn}>
          Kreiraj nalog sa Google-om
        </Button>
        <p>
          Imate nalog?{' '}
          <Link to={'/login'} className={style.registerPage__login}>
            Ulogujte se.
          </Link>
        </p>
      </div>
    </div>
  );
};

export { RegisterPage };
