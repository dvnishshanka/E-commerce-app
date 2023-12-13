import styled from 'styled-components';
import defaultTheme from '../../../theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  bottom: 5%;
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
