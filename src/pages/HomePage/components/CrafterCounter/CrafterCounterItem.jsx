import { firstLetterUpperCase } from '@/utils';
import style from './CrafterCounterItem.module.scss';
const CrafterCounterItem = ({ number, title }) => {
  return (
    <div className={style.crafterCounterItem}>
      <p className={style.crafterCounterItem__number}>{number}</p>
      <p className={style.crafterCounterItem__title}>{firstLetterUpperCase(title)}</p>
    </div>
  );
};

export { CrafterCounterItem };
