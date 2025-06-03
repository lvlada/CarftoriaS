import style from './Input.module.scss';

const Input = ({ type = 'text', placeholder, value, onChange, id, icon, className }) => {
  return (
    <label htmlFor={id} className={style.label}>
      {icon && <span className={style.icon}>{icon}</span>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${style.input} ${className}`}
      />
    </label>
  );
};

export { Input };
