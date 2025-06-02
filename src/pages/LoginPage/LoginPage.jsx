import { LoginFormContainer } from './components';
import style from './LoginPage.module.scss';
const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <LoginFormContainer />
    </div>
  );
};

export { LoginPage };
