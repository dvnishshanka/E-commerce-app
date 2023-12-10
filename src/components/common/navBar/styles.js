import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarWrapper = styled.nav`
  background-color: #efeff0;
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavElements = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;

  li:not(:last-child) {
    margin-right: 60px;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    color: #2f234f;
    text-decoration: none;
  }

  a.active {
    color: #ba2d2d;
    font-weight: 500;
    position: relative;
  }

  a.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #574c4c;
  }
`;
