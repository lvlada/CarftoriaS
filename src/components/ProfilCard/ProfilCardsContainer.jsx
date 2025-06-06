import { useState } from 'react';
import { ProfileCards } from './ProfileCards';
import arrows from '@/assets/images/arrows.png';
import style from './ProfilCardsContainer.module.scss';
import { usersList } from '@/fake_data/usersList';
import { IconArrowRightSolid, IconArrowLeftSolid } from '@/assets/icons';
import { sortUsersByRating, sortUsersByComments } from '@/utils';

const ProfilCardsContainer = () => {
  const [newList, setNewList] = useState(usersList);
  const [ratingAsc, setRatingAsc] = useState(true);

  const fileterByRating = () => {
    setNewList(sortUsersByRating(newList, ratingAsc));
    setRatingAsc(!ratingAsc);
  };

  const filterByComments = () => {
    setNewList(sortUsersByComments(newList, ratingAsc));
    setRatingAsc(!ratingAsc);
  };

  return (
    <section className={style.profilCardsContainer}>
      <p>
        Sortiraj po oceni{' '}
        <span>
          <img
            src={arrows}
            alt="arrows"
            className={style.profilCardsContainer__image}
            onClick={fileterByRating}
          />
        </span>
      </p>
      <p>
        Sortiraj po broju komentara{' '}
        <span>
          <img
            src={arrows}
            alt="arrows"
            className={style.profilCardsContainer__image}
            onClick={filterByComments}
          />
        </span>
      </p>
      <ProfileCards users={newList} />
      <div className={style.profilCardsContainer__pagination}>
        <p>
          <span className={style.paginationArrow}>
            <IconArrowLeftSolid />
          </span>
          Strana 1/3
          <span className={style.paginationArrow}>
            <IconArrowRightSolid />
          </span>
        </p>
        <p>Prikaži po strani: 10 30 50 sve</p>
      </div>
    </section>
  );
};

export { ProfilCardsContainer };
