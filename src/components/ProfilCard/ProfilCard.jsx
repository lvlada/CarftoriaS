import style from './ProfilCard.module.scss';
import placeholder from '@/assets/BannerPlaceHolder.png';
import { Button } from '@/components/ui/Button/Button';

const ProfilCard = () => {
  return (
    <section className={style.profilecard}>
      <div className={style.profilecard__img}>
        <img src={placeholder} alt="profile image" />
      </div>
      <div className={style.profilecard__left}>
        <div>
          <p>Ime i prezime</p>
          <p>Zanat</p>
          <p>Lokacija</p>
        </div>
      </div>
      <div className={style.profilecard__right}>
        <p>Liste usluga </p>
        <ul>
          <li>usluga 1</li>
          <li>usluga 2</li>
          <li>usluga 3</li>
        </ul>
        <Button variant="secondary">Zakaži uslugu</Button>
      </div>
    </section>
  );
};

export { ProfilCard };
