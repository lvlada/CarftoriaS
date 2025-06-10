import { LoginFormContainer } from './components/Form';
import style from './LoginPage.module.scss';
const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <LoginFormContainer />
    </div>
  );
};

export { LoginPage };
