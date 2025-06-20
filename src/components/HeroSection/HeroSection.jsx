import { useScroll } from '@/context';
import { Button } from '../ui';
import style from './HeroSection.module.scss';

const HeroSection = ({ title, description, link }) => {
  const { scrollToSearchSection } = useScroll();

  return (
    <section className={style.hero}>
      <div className={style.hero__content}>
        <h1 className={style.hero__title}>{title}</h1>
        <p className={style.hero__text}>{description}</p>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSearchSection();
          }}
        >
          {link}
        </Button>
      </div>
    </section>
  );
};

export { HeroSection };
