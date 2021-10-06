import styled, { keyframes } from "styled-components";
import { GREEN_PALETTE } from "../../styles/Palette";

function Loading() {
  return (
    <Block>
      <LoadingBall className="ball first" />
      <LoadingBall className="ball second" />
      <LoadingBall className="ball third" />
    </Block>
  );
}

const BallJump = keyframes`
    0% {
        transform: translateY(0px);
    } 50% {
        transform: translateY(-20px);
    } 100% {
        transform: translateY(0px);
    }
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.55);

  & > div:not(:last-child) {
    transform-origin: 0% 50%;
    margin: 0 32px 0 0;
  }

  & > div {
    animation: ${BallJump} infinite linear;
  }

  & > .first {
    animation-duration: 1s;
  }

  & > .second {
    animation-duration: 1.1s;
  }

  & > .third {
    animation-duration: 1.2s;
  }
`;

const LoadingBall = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  background-color: ${GREEN_PALETTE[1]};
  transition: 1s;
`;

export default Loading;
