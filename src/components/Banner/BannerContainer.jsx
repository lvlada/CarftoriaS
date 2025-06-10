import { Banner } from './Banner';
import style from './BannerContainer.module.scss';
import image from '@/assets/images/BannerPlaceHolder.png';
const BannerContainer = () => {
  return (
    <section className={style.banner}>
      <Banner image={image} title="Naziv firme" />
      <Banner image={image} title="Naziv firme" />
      <Banner image={image} title="Naziv firme" />
      <Banner image={image} title="Naziv firme" />
      <Banner image={image} title="Naziv firme" />
      <Banner image={image} title="Naziv firme" />
    </section>
  );
};

export { BannerContainer };
