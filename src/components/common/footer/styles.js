import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  /* bottom: 0; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #001529;
  color: gray;
  padding: 30px;
  width: 100%;
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
