import style from './BannerItem.module.scss';

const BannerItem = ({ image, title }) => {
  return (
    <section className={style.banner}>
      <div className={style.banner__container}>
        <div className={style.banner__image}>
          <img src={image} alt="banner-image" />
        </div>
        <div className={style.banner__text}>
          <p>{title}</p>
        </div>
      </div>
    </section>
  );
};

export { BannerItem };
