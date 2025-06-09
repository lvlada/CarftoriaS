import { useState, useEffect } from 'react';
import { ProfileCards } from './ProfileCards';
import arrows from '@/assets/images/arrows.png';
import style from './ProfilCardsContainer.module.scss';
import { IconArrowRightSolid, IconArrowLeftSolid } from '@/assets/icons';
import { sortUsersByRating, sortUsersByComments } from '@/utils';
import { getAllCraftsmen } from '@/services/api.js';
import { useQuery } from '@tanstack/react-query';
import { useScroll } from '@/context/ScrollContext';

const ProfilCardsContainer = () => {
  const [newList, setNewList] = useState([]);
  const [ratingAsc, setRatingAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { profileCardsRef } = useScroll();

  const { data, isLoading } = useQuery({
    queryKey: ['craftmens'],
    queryFn: getAllCraftsmen
  });

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setNewList(data);
    } else if (data && Array.isArray(data.craftmens)) {
      setNewList(data.craftmens);
    }
  }, [data]);

  // sortiranje
  const fileterByRating = () => {
    setNewList(sortUsersByRating(newList, ratingAsc));
    setRatingAsc(!ratingAsc);
    setPage(1);
  };

  const filterByComments = () => {
    setNewList(sortUsersByComments(newList, ratingAsc));
    setRatingAsc(!ratingAsc);
    setPage(1);
  };

  // paginacija
  const totalPages = Math.ceil(newList.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedUsers = newList.slice(start, end);

  const handlePerPage = (num) => {
    setPerPage(num);
    setPage(1);
  };

  const handlePrev = () => setPage((p) => (p > 1 ? p - 1 : 1));
  const handleNext = () => setPage((p) => (p < totalPages ? p + 1 : totalPages));

  if (isLoading) return <div>Loading....</div>;

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
            onClick={() => handlePerPage(newList.length)}
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
