import styled from 'styled-components';

export const ItemsWrapper = styled.div`
  display: grid;
  gap: 10px 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  padding-top: 20px;

  /* @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } */

  /* @media (max-width: 200px) {
    grid-template-columns: 1fr;
  } */
`;
