import styled from "styled-components";
import { GREEN_PALETTE } from "../../styles/Palette";
import LogoImg from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const NAVS = [
  {
    name: "menu1",
    to: "/",
  },
  {
    name: "menu2",
    to: "/nav2",
  },
  {
    name: "menu3",
    to: "/nav3",
  },
];
function HeaderComponent() {
  return (
    <Block>
      <Logo src={LogoImg} alt="logo" />
      <Nav.Block>
        {NAVS.map((nav) => (
          <NavLink to={nav.to} activeClassName="active" exact>
            <Nav.Item key={nav.name}>{nav.name}</Nav.Item>
          </NavLink>
        ))}
      </Nav.Block>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;

  background-color: ${GREEN_PALETTE[0]};
  padding: 0 20px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 80px;
`;

const Nav = {
  Block: styled.ul`
    display: flex;
    & > a {
      text-decoration: none;
      color: #fff;
    }

    & > a.active {
      color: ${GREEN_PALETTE[3]};
    }
  `,

  Item: styled.li`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    margin: 0 16px 0 0;
  `,
};

export default HeaderComponent;
