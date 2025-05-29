import style from './Footer.module.scss';
import { FooterLinks } from './FooterLinks';
const Footer = ({ links }) => {
  return (
    <footer className={style.footer}>
      {links && <FooterLinks />}
      <div>
        © Copyright 2025, All Rights Reserved
        <span className={style.footer__designer}>Designed by AĐ </span>
      </div>
    </footer>
  );
};

export { Footer };
