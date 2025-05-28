import { IconArrowDown, IconENFlag, IconGlobus, IconLogo, IconRSFlag } from '@/assets';
import { DropDownContainer } from '../DropDown';
import { useState } from 'react';
import style from './Footer.module.scss';
const FooterLinks = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  const handleLanguageSelect = (selection) => {
    if (selection && selection.category && selection.category.code) {
      setSelectedLanguage(selection.category.code);
      // Here you could also trigger any other actions needed when language changes
      // such as updating translations, etc.
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
            <li>Pretraga</li>
            <li>Kategorije</li>
            <li>Zakazi uslugu</li>
            <li>Prijava/Registracija</li>
          </ul>
        </div>

        <div className={`${style.footer__links__column} ${style.footer__links__categories}`}>
          <span className={style.footer__links__title}>Kategorije</span>
          <ul>
            <li>Teksit i koža</li>
            <li>Staklo i Keramika</li>
            <li>Građevina</li>
            <li>Hrana i piće</li>
            <li>Tehničke i zanatske instalacije</li>
            <li>Drvo</li>
            <li>Metal</li>
            <li>Umetnički zanati</li>
          </ul>
        </div>

        <div className={style.footer__links__column}>
          <span className={style.footer__links__title}>Pismo</span>
          <ul>
            <li>latinica</li>
            <li>ћирилица</li>
          </ul>
        </div>
        <div>
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
