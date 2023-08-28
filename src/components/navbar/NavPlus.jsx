import { styled } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { theme } from "../../theme";

const NavPlus = () => {
  return (
    <NavPlusStyled>
      <div className="plus-content">
        <AiOutlineMenu className="icon" />
        <span className="text">Plus</span>
      </div>
    </NavPlusStyled>
  );
};

export default NavPlus;

const NavPlusStyled = styled.button`
  all: unset;
  cursor: pointer;

  &:hover {
    .icon {
      transform: scale(1.1);
      transition: transform 0.3s;
    }
  }

  .plus-content {
    padding: 12px;
    border-radius: ${theme.borderRadius.round};

    display: flex;
    align-items: center;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.greyExtraLight};
      transition: background-color 0.3s;
    }
  }

  .icon {
    margin-right: 1rem;
    font-size: 1.5rem;
    transition: transform 0.3s;
  }

  @media screen and (min-width: 768px) and (max-width: 1263px) {
    .plus-content {
      display: inline-flex;
    }

    .text {
      display: none;
    }

    .icon {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
