import styles from './Select.module.scss';

const Select = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className={styles.select}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export { Select };
