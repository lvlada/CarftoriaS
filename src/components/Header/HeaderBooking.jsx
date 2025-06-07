import {
  IconArrowDown,
  IconENFlag,
  IconGlobus,
  IconLogo,
  IconMagnifyingGlass,
  IconRSFlag
} from '@/assets';
import style from './Header.module.scss';

import { DropDownContainer } from '../DropDown';
import { CATEGORIES } from '@/constants';
import { Link } from 'react-router';

const HeaderBooking = ({ selectedLanguage, onLanguageSelect }) => {
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

  return (
    <header className={style.headerBooking}>
      <IconLogo />
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          <li className={style.navigation__list__link}>
            <IconMagnifyingGlass />
            Pretraga
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
            <Link to="/login">Prijava/Registracija</Link>
          </li>
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
        </ul>
      </nav>
    </header>
  );
};

export { HeaderBooking };
