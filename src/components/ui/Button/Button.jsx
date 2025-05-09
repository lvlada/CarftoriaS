import styles from './Button.module.scss';

const Button = ({ children, className, onClick, type = 'button', disabled, icon }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export { Button };
