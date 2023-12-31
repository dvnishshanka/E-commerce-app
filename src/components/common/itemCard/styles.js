import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  margin: auto;
  display: block;
`;

export const ItemDescription = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  bottom: 5%;
`;

export const ItemTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const FinalPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

export const OriginalPriceWrapper = styled.p`
  margin-top: 0;
`;
export const OriginalPrice = styled.span`
  text-decoration: line-through;
`;
