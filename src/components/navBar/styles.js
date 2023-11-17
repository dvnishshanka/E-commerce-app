import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  font-size: 10;
`;

export const CenterWrapper = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  font-size: 10;
`;

export const NavItem = styled.p`
  padding: 0 25px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid gray;
`;

export const Logo = styled.h4`
  margin: 0;
`;
