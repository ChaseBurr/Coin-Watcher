import styles from "./../styles/Elements.module.scss";

export const Container = ({ children }) => {
     return <div className={styles.container}>{children}</div>;
};
