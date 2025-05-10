import { Button } from '../ui';
import style from './HeroSection.module.scss';

const HeroSection = ({ imagePosition, image, title, description, link }) => {
  return (
    <section className={style.hero}>
      {imagePosition === 'left' ? (
        <div className={style.hero__container}>
          <img src={image} alt="hero-image" />;
          <div className={style.hero__content}>
            <p className={style.hero__title}>{title}</p>
            <p className={style.hero__text}>{description}</p>
            <Button>{link}</Button>
          </div>
        </div>
      ) : null}
      {imagePosition === 'right' ? (
        <div className={style.hero__container}>
          <div className={style.hero__content}>
            <p className={style.hero__title}>{title}</p>
            <p className={style.hero__text}>{description}</p>
            <Button>{link}</Button>
          </div>
          <img src={image} alt="hero-image" />;
        </div>
      ) : null}
    </section>
  );
};

export { HeroSection };
