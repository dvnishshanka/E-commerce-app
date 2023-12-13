import styled from 'styled-components';
import defaultTheme from './../../../theme/index';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${defaultTheme.colors.darkPurple};
  color: ${defaultTheme.colors.lightGray};
  padding: 30px;
`;

export const Title = styled.div`
  height: 30px;
  text-decoration: underline;
  text-underline-offset: 5px;
  color: ${defaultTheme.colors.lightGray} !important;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  li, a {
    color: ${defaultTheme.colors.lightGray};
    font-weight: normal;
    padding-bottom: 5px;
    &:hover {
      color: ${defaultTheme.colors.white};
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
`;
