import styled from 'styled-components';
import defaultTheme from '../../../theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  height: 250px;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  bottom: 5%;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
`;

export const DiscountedPrice = styled.h3`
  color: ${defaultTheme.colors.red};
  margin-bottom: 0;
`;

export const OriginalPriceWrapper = styled.p`
  margin-top: 0;
`;
export const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

export const Price = styled.h3``;
