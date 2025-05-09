import style from './Input.module.scss';

const Input = ({ type = 'text', placeholder, value, onChange, id, icon }) => {
  return (
    <label htmlFor={id}>
      {icon && <span className={style.icon}>{icon}</span>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style.input}
      />
    </label>
  );
};

export { Input };
