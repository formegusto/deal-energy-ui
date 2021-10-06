import styled from "styled-components";
import { GREEN_PALETTE } from "../styles/Palette";

type Props = {
  idx: number;
};

function ItemComponent({ idx }: Props) {
  return (
    <ItemBlock>
      <CheckBox name={`check-${idx}`} type="checkbox" />
      <Title>가구-{idx}</Title>
    </ItemBlock>
  );
}

const ItemBlock = styled.div`
  display: flex;
  align-items: center;

  width: 300px;
  height: 70px;

  padding: 0 16px;
  box-sizing: border-box;
`;

const CheckBox = styled.input`
  position: relative;
  width: 24px;
  height: 24px;

  &:checked {
    &::after {
      background-color: ${GREEN_PALETTE[3]};
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;

    border: 3px solid #333;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #333;
  margin: 0 0 0 16px;
`;

function ListComponent() {
  return (
    <ListBlock>
      {Array.from({ length: 35 }).map((_, idx) => (
        <ItemComponent key={`item-${idx}`} idx={idx} />
      ))}
    </ListBlock>
  );
}

const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  height: 440px;

  border: 2px solid #333;
  box-sizing: border-box;
  border-radius: 16px;

  overflow-x: scroll;
`;

function MainComponent() {
  return (
    <Block>
      <ListComponent />
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  height: 100%;
`;

export default MainComponent;
