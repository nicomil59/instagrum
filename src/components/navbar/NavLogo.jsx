import { styled } from "styled-components";

const NavLogo = () => {
  return (
    <NavLogoStyled href="#">
      <span className="logo-text">Instagrum</span>
    </NavLogoStyled>
  );
};

export default NavLogo;

const NavLogoStyled = styled.a`
  padding: 12px;

  .logo-text {
    font-family: "Lobster Two", cursive;
    font-size: 1.6rem;
  }
`;
