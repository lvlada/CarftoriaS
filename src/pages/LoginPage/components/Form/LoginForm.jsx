import { IconGoogle } from '@/assets';
import { Input, Button } from '@/components';
import { Link } from 'react-router';
import style from './LoginForm.module.scss';

const LoginForm = ({ email, password, onEmailChange, onPasswordChange, login, googleLogin }) => {
  return (
    <div className={style.loginForm__container}>
      <h1 className={style.loginForm__title}>Dobrodošli nazad!</h1>
      <p className={style.loginForm__subTitle}>Ulogujte se na svoj profil</p>

      <form className={style.loginForm__inputs} onSubmit={login}>
        <Input
          placeholder={'Email adreasa'}
          type="email"
          className={style.input}
          value={email}
          onChange={onEmailChange}
          name={'email'}
        />
        <Input
          placeholder={'Šifra'}
          type="password"
          className={style.input}
          value={password}
          onChange={onPasswordChange}
          name={'password'}
        />
      </form>
      <Link className={style.loginForm__forgotPassword}>Zaboraviljena šifra?</Link>
      <Button type="submit" onClick={login}>
        Uloguj se
      </Button>
      <p className={style.loginForm__continueText}>ili nastavi sa</p>

      <Button
        variant="outline"
        icon={<IconGoogle />}
        className={style.loginForm__btn}
        onClick={googleLogin}
      >
        Google
      </Button>
      <p>
        Nemate nalog?{' '}
        <span>
          <Link to="/signup" className={style.loginForm__register}>
            Kreirajte novi nalog.
          </Link>
        </span>
      </p>
    </div>
  );
};

export { LoginForm };
