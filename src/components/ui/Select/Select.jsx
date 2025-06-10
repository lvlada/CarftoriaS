import { IconSelectDropDown } from '@/assets';
import styles from './Select.module.scss';
import { firstLetterUpperCase } from '@/utils';

const Select = ({ options, value, onChange, name, placeholder, disabled }) => {
  return (
    <div className={styles.selectContainer}>
      <select
        value={value}
        onChange={onChange}
        className={styles.select}
        name={name}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {firstLetterUpperCase(placeholder)}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option} className={styles.select__option}>
            {firstLetterUpperCase(option)}
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
