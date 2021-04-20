import Head from "next/head";
import { useState, useEffect } from "react";
// import styles from "./../styles/Home.module.scss";
import axios from "axios";
import CoinCard from "../components/CoinCard";
import { Container } from "./../components/Elements";
import CoinGrid from "../components/CoinGrid";
import CoinHeader from "../components/CoinHeader";
import Header from "../components/Header";

const Home: React.FC<{ data: [] }> = ({ data }) => {
     const [coins, setCoins] = useState<[]>([]);

     useEffect(() => {
          setCoins(data);
     }, []);

     return (
          <div>
               <Head>
                    <title>Coin Watcher</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <Header />
               <main>
                    <Container>
                         <CoinHeader />
                         <CoinGrid>
                              {coins.map((coin, i) => (
                                   <CoinCard coin={coin} key={i} />
                              ))}
                         </CoinGrid>
                    </Container>
               </main>

               <footer></footer>
          </div>
     );
};

export default Home;

export const getServerSideProps = async () => {
     let coins = [];

     try {
          const { data } = await axios.get(
               "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          );
          coins = data;
     } catch (error) {}

     return {
          props: {
               data: coins,
          },
     };
};
