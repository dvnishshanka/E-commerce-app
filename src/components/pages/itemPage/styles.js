import styled from "styled-components";

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

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingCount = styled.p`
  margin-left: 10px;
  color: grey;
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
  display: "flex";
  align-items: "center";
`;
