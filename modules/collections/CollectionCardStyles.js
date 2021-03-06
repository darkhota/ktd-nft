import styled from "styled-components";

export const StyledCollectionCard = styled.div`
  color: #fff;
  background-color: #1a1c1e;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 30px;

  .details {
    padding: 20px;
  }

  .name {
    font-size: 20px;
    font-weight: 900;
  }

  .id{
      color: #a1a5b0;
      font-size: 18px;
      font-weightL 600;
  }

  > img, > video {
    width: 250px;
  }

  video{
    max-width: 250px !important;
  }

  .weth-img {
    height: 23px;
    width: 15px;
  }

  .price-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
    object-fit: contain;
  }

  .price {
    margin-left: 5px;
    font-weight: 600;
  }
`;
