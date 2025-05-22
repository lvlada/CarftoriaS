import { IconSelectDropDown } from '@/assets';
import styles from './Select.module.scss';

const Select = ({ options, value, onChange, name, placeholder }) => {
  return (
    <div className={styles.selectContainer}>
      <select value={value} onChange={onChange} className={styles.select} name={name}>
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option} className={styles.select__option}>
            {option}
          </option>
        ))}
      </select>
      <span className={styles.select__icon}>
        <IconSelectDropDown />
      </span>
    </div>
  );
};

export { Select };
