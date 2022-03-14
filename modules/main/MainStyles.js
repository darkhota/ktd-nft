import styled from "styled-components";

export const StyledMain = styled.div`
  max-height: 50vh;
  margin-top: 2rem;

  .main-content {
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
  }

  .nft-highlight {
    flex: 0.25;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nft-container {
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    margin-right: 20px;
  }

  .nft-container > video {
    width: 200px;
  }

  .selected-nft {
    object-fit: contain;
    max-width: min(30vw, 40vh);
    max-height: 30vw;
  }

  .nft-details {
    display: flex;
    flex: 0.75;
  }

  .title {
    font-size: 96px;
    font-weight: 800;
    color: #fff;
  }

  .item-number {
    color: #a1a5b0;
    font-size: 72px;
    align-self: center;
  }

  .owner {
    display: flex;
    margin: 10px 0;
    height: 50px;
  }

  .owner > div {
    margin: 0 5px;
  }

  .owner-img-container {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: contain;
  }

  .owner-img-container > img {
    width: 100%;
    height: 100%;
  }

  .owner-details {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .owner-name-and-handle {
    flex: 1;
    color: #fff;
  }

  .owner-handle {
    color: #00ebfe;
  }

  .owner-link {
    padding: 12px;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    border: 1px solid #fff;
    margin: 0 0 0 10px;
  }

  .owner-link:hover {
    background: #1a1c1e;
    border: 0;
  }

  .owner-link > img {
    height: 100%;
    width: 100%;
  }

  .group-details {
    display: flex;
    flex-direction: column;
    width: 100%
  }

  .mobile-copy {
    display: none;
  }

  .mobile-copy button {
    background: #1c1c1e;
    padding: 0.5rem;
    border-radius: 10px;
  }
  .mobile-copy button:hover {
    background: #7f5e89;
  }

  @media (max-width: 900px) {
    .title {
      font-size: 56px;
    }
    .owner-details {
      flex-wrap: wrap;
    }
    .owner-link {
      margin-top: 1rem;
      height: 30px;
      width: 30px;
      padding: 5px;
    }
  }

  @media (max-width: 720px) {
    .main-content,
    .nft-highlight,
    .group-details {
      flex-direction: column;
      align-items: center;
    }
    .main-content {
      padding-bottom: 2rem;
    }
  }
  @media (max-width: 630px) {
    .main-content {
      padding-bottom: 50px;
    }
  }

  @media (max-width: 450px) {
    .mobile-copy {
      display: block;
    }
    .eth-add {
      display: none;
    }
    .title {
      font-size: 36px;
    }
    .item-number {
      font-size: 32px;
    }
  }
  @media (max-width: 355px) {
    .main-content {
      padding-bottom: 80px;
    }
  }
`;
