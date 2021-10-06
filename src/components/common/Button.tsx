import React from "react";
import styled, { StyledComponentPropsWithRef } from "styled-components";

interface BasicProps extends StyledComponentPropsWithRef<"button"> {}

function Button({ children, ...buttonProps }: BasicProps) {
  return <DefaultButton {...buttonProps}>{children}</DefaultButton>;
}

const DefaultButton = styled.button`
  width: 150px;
  height: 64px;

  background-color: rgba(96, 128, 40, 1);
  border-radius: 8px;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;

  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(96, 128, 40, 0.75);
  }
`;

export default Button;
