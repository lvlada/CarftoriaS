import {
  IconArrowDown,
  IconENFlag,
  IconGlobus,
  IconLogo,
  IconMagnifyingGlass,
  IconProfile,
  IconRSFlag
} from '@/assets';
import style from './Header.module.scss';

import { DropDownContainer } from '../DropDown';
import { CATEGORIES } from '@/constants';
import { Link } from 'react-router';
import { useAuthStore } from '@/store';

const Header = ({ selectedLanguage, onLanguageSelect, links, isLoggedIn }) => {
  const languages = [
    {
      categoryName: <IconENFlag key="en-flag" />,
      code: 'en'
    },
    {
      categoryName: <IconRSFlag key="rs-flag" />,
      code: 'rs'
    }
  ];
  const { userLogout } = useAuthStore();

  return (
    <header className={style.header}>
      <Link to="/">
        <IconLogo />
      </Link>
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          {links ? (
            <>
              <li className={style.navigation__list__link}>
                <a href="#search-section">
                  <IconMagnifyingGlass />
                  Pretraga
                </a>
              </li>
              <li className={style.navigation__list__link}>
                <DropDownContainer
                  items={CATEGORIES}
                  label={
                    <>
                      Kategorije
                      <IconArrowDown />
                    </>
                  }
                />
              </li>
              <li className={style.navigation__list__link}>Zakaži uslugu</li>
              <li className={style.navigation__list__link}>
                {isLoggedIn ? (
                  <Link to="/booking/">
                    <IconProfile /> Profil
                  </Link>
                ) : (
                  <Link to="/login">Prijava/Registracija</Link>
                )}
              </li>
              {isLoggedIn ? <li onClick={userLogout}>Izloguj se</li> : null}
              <li className={style.navigation__list__link}>
                <DropDownContainer
                  items={languages}
                  label={
                    <>
                      <IconGlobus />
                      <IconArrowDown />
                    </>
                  }
                  variant="flag"
                  selected={selectedLanguage}
                  onSelect={onLanguageSelect}
                />
              </li>
            </>
          ) : (
            <li className={style.navigation__list__link}>
              <DropDownContainer
                items={languages}
                label={
                  <>
                    <IconGlobus />
                    <IconArrowDown />
                  </>
                }
                variant="flag"
                selected={selectedLanguage}
                onSelect={onLanguageSelect}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
