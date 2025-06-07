import { SearchSectionContainer } from '@/components';
import style from './BookingPage.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { renderStars } from '@/utils/renderStars';

const BookingPage = ({ user }) => {
  return (
    <>
      <p className={style.profileCard__left__title}>Profil zanatlije</p>
      <section className={style.bookingPage}>
        <div className={style.profileCard}>
          <div className={style.profileCard__img}>
            <img src="" alt="profile image" />
          </div>
          <div className={style.profileCard__left}>
            <div>
              <p className={style.profileCard__left__title}>{user.fullName}</p>
              <p>{user.description}</p>
              <p>{user.city}</p>
            </div>
          </div>
          <div className={style.profileCard__right}>
            <p className={style.profileCard__left__title}>Liste usluga </p>
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
          <p>Prosečna ocena: {user.avgRating}/5</p>
          <div className={style.starsRow}>{renderStars(user.avgRating)}</div>
        </div>
        <Button variant="secondary">Zakaži moj termin!</Button>
        <p className={style.profileCard__left__title}>LOREM IPSUM</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt inventore
          voluptas? Aperiam, repellendus ad ea id necessitatibus aspernatur aliquam impedit corrupti
          delectus quas nemo asperiores. Beatae rem quis architecto. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error eos iure sapiente aspernatur. Asperiores commodi sint
          reprehenderit est, esse molestias dicta accusantium et laborum, quis ipsam maxime
          provident? Tenetur, quaerat.
        </p>
        <p className={style.profileCard__left__title}>Radovi zanatlije:</p>
      </section>
      <SearchSectionContainer />
    </>
  );
};

export { BookingPage };
