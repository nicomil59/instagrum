import { styled } from "styled-components";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavPlus from "./NavPlus";

const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="navbar-container">
        <NavLogo />
        <NavMenu />
        <NavPlus />
      </div>
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.div`
  background: #f9e7e7;

  height: 100vh;
  width: 244px;

  position: fixed;
  top: 0;
  left: 0;

  padding: 8px 12px 20px;

  @media screen and (min-width: 1920px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1264px) {
    width: 72px;
  }

  @media screen and (max-width: 767px) {
    bottom: 0;
    top: auto;

    height: 50px;
    width: 100%;

    z-index: 5000;
  }

  .navbar-container {
    border: 1px solid red;
    margin-top: 18px;
  }
`;
