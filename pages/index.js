import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Header from "../modules/layouts/Header/Header";
import Main from "../modules/main/Main";
import CollectionCard from "../modules/collections/CollectionCard";
import NftList from "../modules/nft-list/NftList";
import SubHero from "../modules/sub-hero/SubHero";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const hkdLogo = "/images/hkd-3.jpeg";

const nftListData = [
  { id: 0, name: "HKD cool", price: 7, vidUrl: "/images/hkd-2.mp4" },
  { id: 1, name: "HKD Jojo", price: 8, vidUrl: "/images/hkd-1.mp4" },
  { id: 2, name: "HKD Tobi", price: 9, vidUrl: "/images/hkd-4.mp4" },
  { id: 3, name: "HKD Kamsi", price: 10, vidUrl: "/images/hkd-5.mp4" },
  { id: 4, name: "HKD Mike  ", price: 10, vidUrl: "/images/hkd-6.mp4" }
];
export default function Home() {
  const [htdData, setHtdData] = useState([]);
  const [selectedNft, setSelctedNft] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      setHtdData(nftListData);
    };
    return getMyNfts();
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Hakeem the Dj NFTs</title>
        <meta name="description" content="Generated art by Tobi Peter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        {htdData.length > 0 && (
          <>
            <Main htdData={htdData} selectedNft={selectedNft} />
            <NftList htdData={htdData} setSelctedNft={setSelctedNft} />
          </>
        )}
        <SubHero />
      </main>
    </div>
  );
}
