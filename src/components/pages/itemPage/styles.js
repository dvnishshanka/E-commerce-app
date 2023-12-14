import styled from 'styled-components';
import defaultTheme from './../../../theme/DefaultTheme';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;
`;
export const Image = styled.img`
  max-width: 30%;
  object-fit: contain;
`;

export const ItemInfo = styled.div`
  width: 40%;
  padding: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const Price = styled.h3``;

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

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const RatingCount = styled.p`
  margin-left: 10px;
  color: ${defaultTheme.colors.darkGray};
`;

export const DeliveryInfo = styled.div`
  margin-top: 30px;
`;

export const DeliveryInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

export const FastDeliveryIcon = styled.span`
  display: 'flex';
  align-items: 'center';
`;
