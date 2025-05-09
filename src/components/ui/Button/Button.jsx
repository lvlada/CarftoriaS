import styles from './Button.module.scss';

const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  icon,
  variant = 'primary'
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${className}`}
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
