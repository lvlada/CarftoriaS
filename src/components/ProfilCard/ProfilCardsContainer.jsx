import { ProfileCards } from './ProfileCards';
import arrows from '@/assets/images/arrows.png';
import style from './ProfilCardsContainer.module.scss';

const ProfilCardsContainer = () => {
  return (
    <section className={style.profilCardsContainer} id="profile-cards">
      <p>
        Sortiraj po oceni{' '}
        <span>
          <img src={arrows} alt="arrows" className={style.profilCardsContainer__image} />
        </span>
      </p>
      <p>
        Sortiraj po broju komentara{' '}
        <span>
          <img src={arrows} alt="arrows" className={style.profilCardsContainer__image} />
        </span>
      </p>
      <ProfileCards />
      <p>PAGINACIJA</p>
    </section>
  );
};

export { ProfilCardsContainer };
