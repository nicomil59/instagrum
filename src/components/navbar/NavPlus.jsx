import { AiOutlineMenu } from "react-icons/ai";
import { styled } from "styled-components";
import { theme } from "../../theme";

const NavPlus = () => {
  return (
    <NavPlusStyled>
      <AiOutlineMenu className="icon" />
      <span className="text">Plus</span>
    </NavPlusStyled>
  );
};

export default NavPlus;

const NavPlusStyled = styled.button`
  /* background: lightgoldenrodyellow; */
  all: unset;
  cursor: pointer;

  padding: 12px;
  border-radius: ${theme.borderRadius.round};

  display: flex;
  align-items: center;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.greyExtraLight};
    transition: background-color 0.3s;

    .icon {
      transform: scale(1.1);
      transition: transform 0.3s;
    }
  }

  .icon {
    margin-right: 1rem;
    font-size: 1.5rem;
    transition: transform 0.3s;
  }
`;
