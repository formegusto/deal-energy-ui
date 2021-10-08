import React from "react";
import styled, { css, StyledComponentPropsWithRef } from "styled-components";

type StyleProps = {
  colorType?: "dark" | "light";
};

interface BasicProps
  extends StyledComponentPropsWithRef<"button">,
    StyleProps {}

function Button({ children, ...buttonProps }: BasicProps) {
  return <DefaultButton {...buttonProps}>{children}</DefaultButton>;
}

const DefaultButton = styled.button<StyleProps>`
  width: 150px;
  height: 64px;

  ${(props) =>
    props.colorType
      ? props.colorType === "dark"
        ? css`
            background-color: rgba(33, 72, 45, 1);
          `
        : css`
            background-color: rgba(96, 128, 40, 1);
          `
      : css`
          background-color: rgba(96, 128, 40, 1);
        `};
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
    ${(props) =>
      props.colorType
        ? props.colorType === "dark"
          ? css`
              background-color: rgba(33, 72, 45, 0.75);
            `
          : css`
              background-color: rgba(96, 128, 40, 0.75);
            `
        : css`
            background-color: rgba(96, 128, 40, 0.75);
          `};
  }
`;

export default Button;
