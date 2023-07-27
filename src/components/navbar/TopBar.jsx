import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { styled } from "styled-components";
import { theme } from "../../theme";

const TopBar = () => {
  return (
    <TopBarStyled>
      <BsChevronLeft className="previous-icon" />
      <h1 className="name-account">bluelemon59</h1>
    </TopBarStyled>
  );
};

export default TopBar;

const TopBarStyled = styled.div`
  display: none;
  border-bottom: 1px solid ${theme.colors.greyMedium};

  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${theme.colors.white};

  .previous-icon {
    font-size: 1.5rem;
  }

  .name-account {
    font-size: ${theme.fonts.sizes.M};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .previous-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
    }
  }
`;
