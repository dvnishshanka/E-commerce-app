import styled from 'styled-components';
import defaultTheme from './../../../theme/index';

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0px;
  background-color: ${defaultTheme.colors.lightGray};
`;

export const CartItemsWrapper = styled.div`
  background-color: ${defaultTheme.colors.white};
  max-width: fit-content;
  border-radius: 2px;
  margin-left: 20px;
  padding: 10px 10px;
`;

export const CartSummary = styled.div`
  background-color: ${defaultTheme.colors.white};
  padding: 10px 10px;
  margin-right: 20px;
  border-radius: 2px;
`;

export const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  p {
    padding-right: 30px;
  }
`;
