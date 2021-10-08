import styled from "styled-components";
import Button from "./Button";

type Props = {
  status: boolean;
  cancleFunc: () => void;
  confirmFunc: () => void;
};
function ResultModal({ status, cancleFunc, confirmFunc }: Props) {
  return status ? (
    <Block>
      <Result.Block>
        <Result.Modal>결과</Result.Modal>
        <Result.ButtonBlock>
          <Button colorType="dark" onClick={cancleFunc}>
            취소
          </Button>
          <Button onClick={confirmFunc}>저장</Button>
        </Result.ButtonBlock>
      </Result.Block>
    </Block>
  ) : (
    <></>
  );
}

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
`;

const Result = {
  Block: styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
  `,
  Modal: styled.div`
    width: 400px;
    height: 500px;

    background: #fff;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #333;
    margin: 0 0 32px;
  `,
  ButtonBlock: styled.div`
    display: flex;

    & > button:first-child {
      margin: 0 16px 0 0;
    }
  `,
};

export default ResultModal;
