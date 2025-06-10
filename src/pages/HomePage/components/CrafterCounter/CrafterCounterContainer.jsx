import { CrafterCounter } from './CrafterCounter';
import style from './CrafterCounter.module.scss';
const CrafterCounterContainer = () => {
  return (
    <div className={style.crafterCounterContainer}>
      <CrafterCounter />
    </div>
  );
};

export { CrafterCounterContainer };
