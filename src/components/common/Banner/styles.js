import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 75px;
  height: 60vh;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60vw;
`;
export const ImgWrapper = styled.img`
  height: 80%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
`;

export const SubTitle = styled.h2`
  font-weight: 350;
  margin-top: 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 350;
`;
