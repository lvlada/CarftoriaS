import { BannerItem } from './BannerItem';
import style from './Banner.module.scss';
import image from '@/assets/BannerPlaceHolder.png';

const Banner = () => {
  return (
    <section className={style.banner}>
      <BannerItem image={image} title="Naziv firme" />
      <BannerItem image={image} title="Naziv firme" />
      <BannerItem image={image} title="Naziv firme" />
      <BannerItem image={image} title="Naziv firme" />
      <BannerItem image={image} title="Naziv firme" />
      <BannerItem image={image} title="Naziv firme" />
    </section>
  );
};

export { Banner };
