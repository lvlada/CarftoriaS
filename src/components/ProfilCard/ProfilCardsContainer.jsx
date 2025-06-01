import { ProfileCards } from './ProfileCards';
import arrows from '@/assets/images/arrows.png';
import style from './ProfilCardsContainer.module.scss';

const ProfilCardsContainer = () => {
  return (
    <section className={style.profilcardscontainer}>
      <p>
        Sortiraj po oceni{' '}
        <span>
          <img src={arrows} alt="arrows" className={style.profilcardscontainer__image} />
        </span>
      </p>
      <p>
        Sortiraj po broju komentara{' '}
        <span>
          <img src={arrows} alt="arrows" className={style.profilcardscontainer__image} />
        </span>
      </p>
      <ProfileCards />
      <p>PAGINACIJA</p>
    </section>
  );
};

export { ProfilCardsContainer };
