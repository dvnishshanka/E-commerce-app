import styled from 'styled-components';

export const ItemsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-around;
`;
