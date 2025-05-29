import { CrafterCounterItem } from '.';
import style from './CrafterCounter.module.scss';
const CrafterCounter = () => {
  return (
    <div className={style.crafterCounter}>
      <h2 className={style.crafterCounter__title}>Na našoj platformi:</h2>
      <div className={style.crafterCounter__container}>
        <CrafterCounterItem number="23" title="obućara" />
        <CrafterCounterItem number="18" title="usluga" />
        <CrafterCounterItem number="1500" title="zanatlija" />
        <CrafterCounterItem number="4000" title="usluga" />
      </div>
    </div>
  );
};
export { CrafterCounter };
