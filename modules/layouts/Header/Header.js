import React from "react";
import { StyledHeader } from "./HeaderStyles";

const hkdLogo = "/images/hkd-3.jpeg";
const searchIcon = "/assets/header/search.png";
const sunIcon = "/assets/header/theme-switch.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo-container">
        <img src={hkdLogo} className="hkdLogo" alt="" />
      </div>

      <div className="title">
        <h3>Keem the Dj NFT Collection</h3>
      </div>
      {/* <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div> */}
      {/* <div className="header-items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div> */}

      <div className="header-actions">
        {/* <div className="theme-switch-container">
          <img src={sunIcon} alt="" />
        </div> */}
        <div className="login-btn">Marketplace</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
