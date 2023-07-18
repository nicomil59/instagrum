import { styled } from "styled-components";
import { FaRegLemon } from "react-icons/fa6";
import { theme } from "../../theme";

const NavLogo = () => {
  return (
    <NavLogoStyled href="#">
      <FaRegLemon className="icon" />
      <span className="logo-text">Instagrum</span>
    </NavLogoStyled>
  );
};

export default NavLogo;

const NavLogoStyled = styled.a`
  padding: 12px;
  margin-bottom: 24px;
  border-radius: ${theme.borderRadius.round};
  transition: background-color 0.3s;

  .icon {
    display: none;
  }

  .logo-text {
    font-family: "Lobster Two", cursive;
    font-size: 1.6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1263px) {
    margin-bottom: 32px;
    
    &:hover {
      background-color: ${theme.colors.greyExtraLight};
      transition: background-color 0.3s;

      .icon {
        transform: scale(1.1);
        transition: transform 0.3s;
      }
    }

    .icon {
      display: block;
      font-size: 1.5rem;
      transition: transform 0.3s;
    }

    .logo-text {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
