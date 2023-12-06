import styled from "styled-components";
import defaultTheme from "../../../theme";
import { Input } from "antd";

export const FormInput = styled(Input)`
  border: 1px solid ${defaultTheme.colors.black} !important;
  border-radius: 2px;

  &:hover {
    border: 10px solid ${defaultTheme.colors.black};
  }
`;

export const FormInputPassword = styled(Input.Password)`
  border: 1px solid ${defaultTheme.colors.black} !important;
  border-radius: 2px;

  &:hover {
    border: 10px solid ${defaultTheme.colors.black};
  }
`;
