import styled from "styled-components";
import defaultTheme from "../../../theme";
import { Button } from "antd";

export const PrimaryBtn = styled(Button)`
  background-color: ${defaultTheme.colors.black};
  color: ${defaultTheme.colors.white};
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 2px;
  font-weight: 700;
  font-size: medium;

  &:not(&:disabled):hover {
    background-color: ${defaultTheme.colors.gray};
    color: ${defaultTheme.colors.black};
    border: 1px solid ${defaultTheme.colors.black};
  }
`;
