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
  width: 50vw;
`;
export const ImgWrapper = styled.img`
  height: 85%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 0;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  margin-top: 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;
