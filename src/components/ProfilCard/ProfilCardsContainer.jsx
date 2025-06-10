import { useState, useEffect } from 'react';
import { ProfileCards } from './ProfileCards';
import arrows from '@/assets/images/arrows.png';
import style from './ProfilCardsContainer.module.scss';
import { IconArrowRightSolid, IconArrowLeftSolid } from '@/assets/icons';
import { sortUsersByRating, sortUsersByComments } from '@/utils';
import { useScroll } from '@/context/ScrollContext';
import { useCraftsmenStore } from '@/store/CraftsmenStore';

const ProfilCardsContainer = () => {
  const [ratingAsc, setRatingAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { profileCardsRef } = useScroll();

  // Koristi filtrirane podatke iz globalnog store-a
  const filteredCraftsmen = useCraftsmenStore((state) => state.filteredCraftsmen);

  // Lokalni state za sortiranu listu (da ne menjaš globalni store)
  const [sortedList, setSortedList] = useState(filteredCraftsmen);

  // Kad se filtrirani podaci promene, resetuj sortiranu listu i paginaciju
  useEffect(() => {
    setSortedList(filteredCraftsmen);
    setPage(1);
  }, [filteredCraftsmen]);

  // sortiranje
  const fileterByRating = () => {
    setSortedList(sortUsersByRating(sortedList, ratingAsc));
    setRatingAsc(!ratingAsc);
    setPage(1);
  };

  const filterByComments = () => {
    setSortedList(sortUsersByComments(sortedList, ratingAsc));
    setRatingAsc(!ratingAsc);
    setPage(1);
  };

  // paginacija
  const totalPages = Math.ceil(sortedList.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedUsers = sortedList.slice(start, end);

  const handlePerPage = (num) => {
    setPerPage(num);
    setPage(1);
  };

  const handlePrev = () => setPage((p) => (p > 1 ? p - 1 : 1));
  const handleNext = () => setPage((p) => (p < totalPages ? p + 1 : totalPages));

  if (!filteredCraftsmen) return <div>Loading....</div>;

  return (
    <section className={style.profilCardsContainer} id="profile-cards" ref={profileCardsRef}>
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
      <ProfileCards users={paginatedUsers} />
      <div className={style.profilCardsContainer__pagination}>
        <p>
          <span
            className={style.paginationArrow}
            onClick={handlePrev}
            style={{ cursor: 'pointer' }}
          >
            <IconArrowLeftSolid />
          </span>
          Strana {page}/{totalPages}
          <span
            className={style.paginationArrow}
            onClick={handleNext}
            style={{ cursor: 'pointer' }}
          >
            <IconArrowRightSolid />
          </span>
        </p>
        <p>
          Prikaži po strani:
          <span style={{ cursor: 'pointer', marginLeft: 8 }} onClick={() => handlePerPage(10)}>
            {' '}
            10{' '}
          </span>
          <span style={{ cursor: 'pointer', marginLeft: 8 }} onClick={() => handlePerPage(30)}>
            {' '}
            30{' '}
          </span>
          <span style={{ cursor: 'pointer', marginLeft: 8 }} onClick={() => handlePerPage(50)}>
            {' '}
            50{' '}
          </span>
          <span
            style={{ cursor: 'pointer', marginLeft: 8 }}
            onClick={() => handlePerPage(sortedList.length)}
          >
            {' '}
            sve{' '}
          </span>
        </p>
      </div>
    </section>
  );
};

export { ProfilCardsContainer };
