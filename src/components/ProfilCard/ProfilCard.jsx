import { useState } from 'react';
import style from './ProfilCard.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { IconStar } from '@/assets';
import { IconArrowDown, IconArrowUp } from '@/assets';

const ProfilCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className={style.container}>
      <div className={style.profileCard}>
        <div className={style.profileCard__img}>
          <img src="" alt="profile image" />
        </div>
        <div className={style.profileCard__left}>
          <div>
            <p className={style.profileCard__left__title}>Ime i prezime</p>
            <p>Zanat</p>
            <p>Lokacija</p>
          </div>
          <div className={style.profileCard__left__comments}>
            <p>
              <u>Vidi komentare (11)</u>
            </p>
            <p>Prosečna ocena: 1.2/5</p>
            <IconStar />
          </div>
        </div>
        <div className={style.profileCard__right}>
          <p className={style.profileCard__left__title}>Liste usluga </p>
          <ul>
            <li>usluga 1</li>
            <li>usluga 2</li>
            <li>usluga 3</li>
          </ul>
          <Button variant="secondary">Zakaži uslugu</Button>
        </div>
      </div>

      <div className={style.profileCard__toggle}>
        <p onClick={() => setOpen(!open)}>
          Prikaži više{' '}
          {open ? (
            <IconArrowUp width="28" height="28" className={style.arrowIcon} />
          ) : (
            <IconArrowDown width="28" height="28" className={style.arrowIcon} />
          )}
        </p>
      </div>

      {open && (
        <div className={style.profilecard__collapsible}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur perspiciatis
            molestias ad aut iusto ut aliquid quibusdam qui autem obcaecati, quasi earum consequatur
            laudantium esse quae velit placeat vitae!
          </p>
        </div>
      )}
    </section>
  );
};

export { ProfilCard };
