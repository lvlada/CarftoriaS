import { SearchSectionContainer } from '@/components';
import style from './BookingPage.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { renderStars } from '@/utils/renderStars';
import { BookingPageComment } from './BookingPageComment';
import { BookinPageDropDown } from './BookinPageDropDown';
import { Calendar } from '@/assets/icons/Calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const BookingPage = ({ user }) => {
  const handleAlert = () => {
    toast.success('Vas termin je zakazan!');
  };
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <p className={style.profileCard__left__title}>Profil zanatlije</p>
      <section className={style.bookingPage}>
        <div className={style.profileCard}>
          <div className={style.profileCard__img}>
            <img src={user.profileImage} alt="profile image" />
          </div>
          <div className={style.profileCard__left}>
            <div>
              <p className={style.profileCard__left__name}>{user.fullName}</p>
              <p>{user.description}</p>
              <p>{user.city}</p>
            </div>
          </div>
          <div className={style.profileCard__right}>
            <p className={style.profileCard__left__name}>Liste usluga </p>
            <ul>
              {user.services.map((item) => (
                <li key={item.id}>{item.serviceName}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.profileCard__left__comments}>
          <p>
            <u>Vidi komentare ({user.comments.length})</u>
          </p>
          <p>Prosečna ocena: {user.avgRating.toFixed(1)}/5</p>
          <div className={`${style.starsRow} ${style.commentSpace}`}>
            {renderStars(user.avgRating)}
          </div>
        </div>
        <p className={style.profileCard__left__title}>Opis iskustva</p>
        <p className={style.commentSpace}>{user.description}</p>
        <div className={style.termin}>
          <p className={style.terminTitle}>ZAKAZIVANJE</p>
          <BookinPageDropDown user={user} />
          <br />
          <select name="" id="" className={style.dropDown}>
            <option disabled selected value="">
              Odaberite mesec i godinu:
            </option>
          </select>
          <p className={style.terminCalendarTitle}>Odaberite datum i slobodan termin:</p>
          <Calendar />
        </div>
        <Button variant="secondary" className={style.terminButton} onClick={handleAlert}>
          Zakaži moj termin!
        </Button>
        <p className={style.profileCard__left__title}>Radovi zanatlije:</p>
        <div className={style.craftImage}>
          {user.images && user.images.length > 0
            ? user.images
                .slice(0, 4)
                .map((item) => <img key={item} src={item} alt="Craftman work" />)
            : Array.from({ length: 4 }).map((_, idx) => (
                <img key={idx} src="#" alt="Craftman work placeholder" />
              ))}
        </div>
        <p id="comments" className={style.commentsTitle}>
          Komentari korisnika
        </p>
        {user.comments.map((comment) => (
          <BookingPageComment key={comment.id} item={comment} name={comment.userId} />
        ))}
        <p className={style.commentsLink}>
          <u>Prikaži sve komentare ({user.comments.length})</u>
        </p>
      </section>
      <SearchSectionContainer />
      <ToastContainer />
    </>
  );
};

export { BookingPage };
