import React from "react";
import { StyledNftList } from "./NftListStyles";
import CollectionCard from "../collections/CollectionCard";
const hkdLogo = "/images/hkd-3.jpeg";

const NftList = ({ htdData, setSelctedNft }) => {
  return (
    <StyledNftList>
      {htdData.map((nft, i) => (
        <div onClick={() => setSelctedNft(nft.id)} key={nft.id}>
          <CollectionCard
            key={nft.id}
            id={nft.id}
            name={nft.name}
            traits={nft.price}
            vid={nft.vidUrl}
          />
        </div>
      ))}
      {/* 
      <CollectionCard
        id={1}
        name={"HKD cool"}
        traits={[{ value: 7 }]}
        vid="/images/hkd-2.mp4"
      />
      <CollectionCard
        id={2}
        name={"HKD cool"}
        traits={[{ value: 7 }]}
        vid="/images/hkd-2.mp4"
      />
      <CollectionCard
        id={3}
        name={"HKD cool"}
        traits={[{ value: 7 }]}
        vid="/images/hkd-2.mp4"
      />
      <CollectionCard
        id={4}
        name={"HKD cool"}
        traits={[{ value: 7 }]}
        vid="/images/hkd-2.mp4"
      /> */}
    </StyledNftList>
  );
};

export default NftList;
