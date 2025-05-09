import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export { Container };
