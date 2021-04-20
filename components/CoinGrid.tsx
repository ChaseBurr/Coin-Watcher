import React from "react";
import styles from "./../styles/CoinCard.module.scss";

const CoinGrid: React.FC<{ children }> = ({ children }) => {
     return <div className={styles.coin_grid}>{children}</div>;
};

export default CoinGrid;
