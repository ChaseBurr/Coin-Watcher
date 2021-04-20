import styles from "./../styles/CoinCard.module.scss";

interface Props {
     coin: {
          id: string;
          image: string;
          name: string;
          symbol: string;
          current_price: number;
          price_change_percentage_24h: number;
          market_cap_rank: number;
          market_cap: number;
          circulating_supply: number;
     };
}

const CoinCard: React.FC<Props> = ({ coin }) => {
     const downCarpet = {
          svg: "/svg/caret-down-solid.svg",
          class: styles.down_carpet,
     };
     const upCarpet = {
          svg: "/svg/caret-up-solid.svg",
          class: styles.up_carpet,
     };

     return (
          <div className={styles.coin_card}>
               <p>{coin.market_cap_rank}</p>
               <div className={styles.multi_item}>
                    <img src={coin.image} alt="" />
                    <p>{coin.id}</p>
               </div>
               <p>${coin.current_price}</p>
               <div
                    className={`${styles.multi_item} ${
                         coin.price_change_percentage_24h < 0
                              ? downCarpet.class
                              : upCarpet.class
                    }`}
               >
                    <img
                         src={`${
                              coin.price_change_percentage_24h < 0
                                   ? downCarpet.svg
                                   : upCarpet.svg
                         }`}
                         alt=""
                    />
                    <p>{coin.price_change_percentage_24h}%</p>
               </div>
               <p>{coin.market_cap}</p>
               <p>{coin.circulating_supply}</p>
          </div>
     );
};

export default CoinCard;
