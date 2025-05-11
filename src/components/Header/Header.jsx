import style from './Header.module.scss';
import { NavLink } from 'react-router';

const Header = ({ navigationLinks }) => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>logo</div>
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          {navigationLinks.map((link, index) => (
            <li key={index} className={style.navigation__list__link}>
              <NavLink to={link.to} aria-label={link.ariaLabel}>
                {link.icon && (
                  <span>
                    <link.icon />
                  </span>
                )}
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
