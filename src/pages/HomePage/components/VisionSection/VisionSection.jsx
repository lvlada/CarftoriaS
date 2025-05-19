import { Button } from '@/components';
import style from './VisionSection.module.scss';

const VisionSection = () => {
  return (
    <section className={style.visionSection}>
      <div className={style.visionSection__image}></div>
      <div className={style.visionSection__content}>
        <h2 className={style.visionSection__heading}>Vizija</h2>
        <p className={style.visionSection__description}>
          Cilj platforme je da korisnicima omogući da na jednom mestu pregledaju zanatlije, njihove
          usluge, ocene i raspoloživost, kao i da zanatlijama olakša pristup novim klijentima i
          modernizuje njihovo poslovanje. Naši korisnici su građani Srbije koji traže kvalitetne
          zanatske usluge, kao i turisti zainteresovani za autentične rukotvorine.
        </p>
        <Button>{`Vidi sve  zanatlije >`}</Button>
      </div>
    </section>
  );
};

export { VisionSection };
