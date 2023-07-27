import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

const ProfileHeader = ({ username }) => {
  return (
    <ProfileHeaderStyled>
      <h1>{username}</h1>
      <div className="buttons">
        <button className="btn btn-follow">Suivre</button>
        <button className="btn btn-contact">Contacter</button>
        <button className="btn btn-similar">
          <FiUserPlus className="icon-similar" />
        </button>
      </div>
      <div className="options">
        <button className="options-btn">
          <BsThreeDots className="icon-dots" />
        </button>
      </div>
    </ProfileHeaderStyled>
  );
};

export default ProfileHeader;

const ProfileHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;

  h1 {
    font-size: ${theme.fonts.sizes.L};
    font-weight: ${theme.fonts.weights.regular};
  }

  .buttons {
    display: flex;
    align-items: center;

    .btn {
      height: 32px;
      padding: 7px 21px;
      font-size: ${theme.fonts.sizes.S};
      font-weight: ${theme.fonts.weights.semiBold};
      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};
      border: 0;
      border-radius: ${theme.borderRadius.round};
      cursor: pointer;

      &.btn-follow,
      &.btn-contact {
        margin-right: 8px;
      }

      &.btn-contact {
        background-color: ${theme.colors.greyLight};
        color: ${theme.colors.black};

        &:hover {
          background-color: ${theme.colors.greyMedium};
        }
      }

      &.btn-similar {
        width: 34px;
        padding: 8px;
        background-color: ${theme.colors.greyLight};
        color: ${theme.colors.black};
        font-size: 12px;

        &:hover {
          background-color: ${theme.colors.greyMedium};
        }

        .icon-similar {
          font-size: 16px;
        }
      }

      &:hover {
        background-color: ${theme.colors.blueMedium};
      }
    }
  }

  .options {
    .options-btn {
      all: unset;
      cursor: pointer;
      display: flex;
      align-items: center;

      .icon-dots {
        font-size: 24px;
      }
    }
  }

  @media screen and (max-width: 735px) {
    flex-wrap: wrap;
    margin-bottom: 0;

    h1 {
      order: 1;
    }

    .options {
      order: 2;
    }

    .buttons {
      order: 3;
      width: 100%;
      margin-top: 8px;
    }
  }
`;
