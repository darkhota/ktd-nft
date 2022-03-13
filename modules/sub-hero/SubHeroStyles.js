import styled from "styled-components";

export const StyledSubHero = styled.div`
  height: 80vh;
  color: #fff;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h2 {
    font-size: 80px;
    font-weight: 600;
    opacity: 1;
  }

  .market-btn {
    background: linear-gradient(to right, #59f5b7, #66feea);
    padding: 15px 40px;
    border-radius: 50px;
    color: #000;
    opacity: 1;
  }

  @media (max-width: 1240px) {
    > h2 {
      font-size: 50px;
    }
  }

  @media (max-width: 832px) {
    > h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 556px) {
    padding: 0.1rem;
    > h2 {
      font-size: 20px;
    }
  }
  @media (max-width: 356px) {
    padding: 0.1rem;
    height: 40vh;
    > h2 {
      font-size: 16px;
    }
  }
`;
