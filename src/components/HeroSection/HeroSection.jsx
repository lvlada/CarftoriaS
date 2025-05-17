import { Button } from '../ui';
import style from './HeroSection.module.scss';

const HeroSection = ({ title, description, link }) => {
  return (
    <section className={style.hero}>
      <div className={style.hero__content}>
        <h1 className={style.hero__title}>{title}</h1>
        <p className={style.hero__text}>{description}</p>
        <Button variant="primary">{link}</Button>
      </div>
    </section>
  );
};

export { HeroSection };
