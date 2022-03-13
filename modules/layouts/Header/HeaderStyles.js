import styled from "styled-components";

export const StyledHeader = styled.div`
  color: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  > div {
    margin: 10px;
  }

  .hkdLogo {
    width: 100px;
    border-radius: 50%;
    object-fit: contain;
  }

  .title > h3 {
    font-weight: 600;
    font-size: 25px;
  }

  .searchBar {
    background-color: #1c1c1e;
    height: 50px;
    flex: 1;
    display: flex;
    border-radius: 50px;
    align-items: center;
  }

  .searchIconContainer {
    margin: 10px;
  }

  .searchInput {
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    color: #eee;
    font-size: 16px;
  }

  .header-items {
    display: flex;
    color: #a1a5b0;
  }
  .header-items > p,
  .header-action > div {
    margin: 10px;
  }

  .header-actions {
    display: flex;
    align-items: center;
  }

  .theme-switch-container {
    display: flex;
    background-color: #1c1c1e;
    border-radius: 50%;
    padding: 15px;
    justify-content: center;
    align-items: center;
    object-fit: contain;
  }

  .theme-switch-container > img {
    height: 25px;
  }

  .login-btn {
    background: linear-gradient(to right, #59f5b7, #66feea);
    padding: 15px 40px;
    border-radius: 50px;
    color: #000;
  }

  @media (max-width: 760px) {
    .login-btn {
      padding: 10px 20px;
      font-size: 12px;
    }

    .title > h3 {
      font-weight: 600;
      font-size: 16px;
    }
  }

  @media (max-width: 403px) {
    flex-direction: column;
    height: 250px;
    border-bottom: 1px solid #fff;
  }
  .login-btn {
    display: none;
  }
`;
