import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100%;
      }
    `}
  />
);

export const basicStyles = css`
  background-color: white;
  transition: all 0.1s linear;
`;

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;

export const Basic = styled.div`
  ${basicStyles}
`;

export const Combined = styled.div`
  ${basicStyles}
  ${hoverStyles}
`;

export const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`;
