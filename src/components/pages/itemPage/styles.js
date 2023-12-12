import styled from 'styled-components';
import defaultTheme from './../../../theme/DefaultTheme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;
export const Image = styled.img`
  width: 40%;
`;

export const ItemInfo = styled.div`
  width: 40%;
  padding: 40px;
`;

export const Title = styled.h2``;

export const Description = styled.div``;

export const Price = styled.h3``;

export const DiscountedPrice = styled.h3`
  color: ${defaultTheme.colors.red};
  margin-bottom: 0;
`;

export const OriginalPrice = styled.h4`
  margin-top: 0;
  color: ${defaultTheme.colors.darkGray};
  font-weight: 400;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
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
