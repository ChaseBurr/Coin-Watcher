import React from "react";
import styles from "./../styles/CoinCard.module.scss";

const CoinHeader: React.FC = () => {
     return (
          <div className={styles.coin_header}>
               <p>#</p>
               <p>Name</p>
               <p>Price</p>
               <p>24 %</p>
               <p>Market Cap</p>
               <p>Circulating Supply</p>
          </div>
     );
};

export default CoinHeader;
