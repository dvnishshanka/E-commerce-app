import styled from 'styled-components';

export const ItemsWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding-top: 20px;
  padding-bottom: 20px;

  /* @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } */

  /* @media (max-width: 200px) {
    grid-template-columns: 1fr;
  } */
`;
