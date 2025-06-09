import { useState } from 'react';
import style from './ProfilCard.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { IconArrowDown, IconArrowUp } from '@/assets';
import { renderStars } from '@/utils/renderStars';
import { useNavigate } from 'react-router';

const ProfilCard = ({ user }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function handleProfile(id) {
    navigate(`/booking/${id}`);
  }

  return (
    <section className={style.container}>
      <div className={style.profileCard}>
        <div className={style.profileCard__img}>
          <img src={user.profileImage} alt="profile image" />
        </div>
        <div className={style.profileCard__left}>
          <div>
            <p className={style.profileCard__left__title}>{user.fullName}</p>
            <p>{user.description}</p>
            <p>{user.city}</p>
          </div>
          <div className={style.profileCard__left__comments}>
            <p>
              <u>Vidi komentare ({user.comments.length})</u>
            </p>
            <p>Prosečna ocena: {user.avgRating.toFixed(1)}/5</p>
            <div className={style.starsRow}>{renderStars(user.avgRating)}</div>
          </div>
        </div>
        <div className={style.profileCard__right}>
          <p className={style.profileCard__left__title}>Liste usluga </p>
          <ul>
            {user.services.map((item) => (
              <li key={item.id}>{item.serviceName}</li>
            ))}
          </ul>
          <Button variant="secondary" onClick={() => handleProfile(user.craftmanId)}>
            Zakaži uslugu
          </Button>
        </div>
      </div>
      {open && (
        <div className={style.profilecard__collapsible}>
          {user.images.slice(0, 4).map((item) => (
            <img key={item} src={item} className={style.profilecard__collapsible_img} />
          ))}
        </div>
      )}
      <div className={style.profileCard__toggle}>
        <p onClick={() => setOpen(!open)}>{open ? 'Prikazi manje' : 'Prikazi vise'}</p>
        {open ? (
          <IconArrowUp width="28" height="28" className={style.arrowIcon} />
        ) : (
          <IconArrowDown width="28" height="28" className={style.arrowIcon} />
        )}
      </div>
    </section>
  );
};

export { ProfilCard };
