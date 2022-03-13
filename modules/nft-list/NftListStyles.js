import styled from "styled-components";

export const StyledNftList = styled.div`
  cursor: pointer;
  display: flex;
  overflow: scroll;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;

  :: -webkit-scrollbar {
    display: none;
  }

  @media (max-width: 721px) {
    margin-top: 100px;
  }
`;
