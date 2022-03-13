import React from "react";
import { StyledCollectionCard } from "./CollectionCardStyles";

const weth = "/assets/weth.png";

const CollectionCard = ({ id, name, traits, image, vid }) => {
  return (
    <StyledCollectionCard>
      {/* <img src={image} alt="" /> */}
      <video autoPlay={"autoplay"} loop muted preload="auto">
        <source src={vid} type="video/mp4" />
      </video>
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>

        <div className="price-container">
          <img src={weth} className="weth-img" alt="" />
          <div className="price">{traits}</div>
        </div>
      </div>
    </StyledCollectionCard>
  );
};

export default CollectionCard;
