import { styled } from "styled-components";

const NavLogo = () => {
  return (
    <NavLogoStyled href="#">
      <span>Instagrum</span>
    </NavLogoStyled>
  );
};

export default NavLogo;

const NavLogoStyled = styled.a`
  background: lightgrey;
`;
