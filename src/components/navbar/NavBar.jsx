import { styled } from "styled-components";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavPlus from "./NavPlus";
import { theme } from "../../theme";

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
  border-right: 1px solid ${theme.colors.greyMedium};

  height: 100vh;
  width: 244px;

  position: fixed;
  top: 0;
  left: 0;

  padding: 8px 12px 20px;

  .navbar-container {
    margin-top: 18px;

    height: calc(100vh - 47px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 1920px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1263px) {
    width: 72px;
  }

  @media screen and (max-width: 767px) {
    border-right: 0;
    border-top: 1px solid ${theme.colors.greyMedium};

    background-color: ${theme.colors.white};

    bottom: 0;
    top: auto;
    z-index: 5000;

    height: 50px;
    width: 100%;

    padding: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-container {
      margin-top: 0;

      height: auto;

      flex: 1;
    }
  }
`;
