import { IconGoogle } from '@/assets';
import { Input, Button } from '@/components';
import { Link } from 'react-router';
import style from './LoginForm.module.scss';
const LoginForm = () => {
  return (
    <div className={(style.loginFormtype = 'submit')}>
      <h1>Dobrodošli nazad!</h1>
      <p>Ulogujte se na svoj profil</p>
      <form>
        <Input placeholder={'Email adreasa'} type="email" />
        <Input placeholder={'Šifra'} type="password" />
      </form>
      <Link>Zaboraviljena šifra?</Link>
      <Button type="submit">Uloguj se</Button>
      <p>ili nastavi sa</p>
      <Button variant="secondary" icon={<IconGoogle />}>
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
