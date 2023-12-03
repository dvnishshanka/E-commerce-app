import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #001529;
  color: gray;
  padding: 30px;
  margin-top: 30px;
  //   position: absolute;
  //   bottom: -250px;
`;

export const Title = styled.div`
  height: 30px;
  text-decoration: underline;
  text-underline-offset: 5px;
  color: #b2abab;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  li {
    padding-bottom: 5px;
    &:hover {
      color: lightgray;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
`;
