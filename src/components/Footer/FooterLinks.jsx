import { IconArrowDown, IconENFlag, IconGlobus, IconLogo, IconRSFlag } from '@/assets';
import { DropDownContainer } from '../DropDown';
import { useState } from 'react';
import style from './Footer.module.scss';
import { Link } from 'react-router';
const FooterLinks = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageSelect = (selection) => {
    if (selection && selection.category && selection.category.code) {
      setSelectedLanguage(selection.category.code);
    }
  };
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
    <div className={style.footer__links}>
      <div className={style.footer__links__container}>
        <div className={style.footer__links__column}>
          <span className={style.footer__links__title}>Prečice</span>
          <ul>
            <li>
              <a href="#search-section">Pretraga</a>
            </li>
            <li>
              <a href="#profile-cards">Kategorije</a>
            </li>
            <li>
              <a href="#profile-cards">Zakazi uslugu</a>
            </li>
            <li>
              <Link to="/login">Prijava/Registracija</Link>
            </li>
          </ul>
        </div>

        <div className={style.footer__links__column}>
          <span className={style.footer__links__title}>Kategorije</span>
          <ul className={style.footer__links__categories}>
            <li>Teksit i koža</li>
            <li>Tehničke i zanatske instalacije</li>
            <li>Staklo i Keramika</li>
            <li>Drvo</li>
            <li>Građevina</li>
            <li>Metal</li>
            <li>Hrana i piće</li>
            <li>Umetnički zanati</li>
          </ul>
        </div>

        <div className={style.footer__links__column}>
          <span className={style.footer__links__title}>Pismo</span>
          <ul className={style.footer__links__fonts}>
            <li>latinica</li>
            <li>ћирилица</li>
          </ul>
        </div>
        <div>
          <DropDownContainer
            items={languages}
            label={
              <>
                <IconGlobus color="#C4BBAF" />
                <IconArrowDown color="#C4BBAF" />
              </>
            }
            variant="flag"
            selected={selectedLanguage}
            onSelect={handleLanguageSelect}
          />
        </div>
        <div className={style.logo}>
          <IconLogo />
        </div>
      </div>
    </div>
  );
};

export { FooterLinks };
