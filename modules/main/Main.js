import React, { useState, useEffect } from "react";
import { StyledMain } from "./MainStyles";
import { useClipboard } from "@chakra-ui/react";
const instagramLogo = "/assets/owner/instagram.png";
const twitterLogo = "/assets/owner/twitter.png";
const moreIcon = "/assets/owner/more.png";
import Link from "next/link";

const Main = ({ selectedNft, htdData }) => {
  const [activeNft, setActiveNft] = useState(htdData[0]);
  const { hasCopied, onCopy } = useClipboard(
    "0xc45b78fa420d9cddaa83aab8ba2a07058d4255b4"
  );

  useEffect(() => {
    console.log(htdData[selectedNft]);

    setActiveNft(htdData[selectedNft]);
    console.log(activeNft.vidUrl);
  }, [htdData, selectedNft]);
  return (
    <StyledMain>
      <div className="main-content">
        <div className="nft-highlight">
          <div className="nft-container">
            <video
              autoPlay={"autoplay"}
              loop
              muted
              preload="auto"
              className="selected-nft"
              key={activeNft.vidUrl}
            >
              <source src={activeNft.vidUrl} />
            </video>
          </div>
        </div>
        <div className="group-details">
          <div className="nft-details" style={{ color: "#fff" }}>
            <div className="title">{activeNft.name}</div>
            <span className="item-number">.#{activeNft.id}</span>
          </div>
          <div className="owner">
            <div className="owner-img-container">
              <img src="images/hkd-3.jpeg" alt="" />
            </div>
            <div className="owner-details">
              <div className="owner-name-and-handle">
                <div className="eth-add">
                  0xc45b78fa420d9cddaa83aab8ba2a07058d4255b4
                </div>
                <div className="mobile-copy">
                  <button onClick={onCopy} ml={2}>
                    {hasCopied ? "Copied" : "eth address"}
                  </button>
                </div>
                <div className="owner-handle">@tobi-peter</div>
              </div>
              <div className="owner-link">
              <Link href="https://www.instagram.com/tobipeter8">
                <img src={instagramLogo} alt="" />
                </Link>
              </div>
              <div className="owner-link">
                <Link href="https://twitter.com/tobipeter8">
                  <img src={twitterLogo} alt="" />
                </Link>
              </div>
              <div className="owner-link">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
