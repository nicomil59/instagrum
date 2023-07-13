import { styled } from "styled-components";
import { theme } from "../../theme";

const NavItem = ({ Icon, Img, text }) => {
  return (
    <NavItemStyled>
      <a href="#">
        <div className="item-content">
          {Icon ? Icon : Img}
          <span className="text">{text}</span>
        </div>
      </a>
    </NavItemStyled>
  );
};

export default NavItem;

const NavItemStyled = styled.li`
  margin-bottom: 8px;

  a {
    /* padding: 12px;
    display: flex;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    transition: background-color 0.3s; */

    &:hover {
      /* background-color: ${theme.colors.greyExtraLight};
      transition: background-color 0.3s; */

      .icon,
      .profile-img {
        transform: scale(1.1);
        transition: transform 0.3s;
      }
    }

    .item-content {
      padding: 12px;
      display: flex;
      align-items: center;
      border-radius: ${theme.borderRadius.round};
      transition: background-color 0.3s;

      &:hover {
        background-color: ${theme.colors.greyExtraLight};
        transition: background-color 0.3s;
      }
    }

    .icon {
      font-size: 1.5rem;
    }

    .icon,
    .profile-img {
      margin-right: 1rem;
      transition: transform 0.3s;
    }

    .profile-img {
      border-radius: ${theme.borderRadius.circle};
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1263px) {
    a {
      .item-content {
        display: inline-flex;
      }

      .text {
        display: none;
      }

      .icon,
      .profile-img {
        margin-right: 0;
      }
    }
  }
`;
