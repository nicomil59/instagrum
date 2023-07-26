import React from "react";
import { styled } from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import { theme } from "../../../theme";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";

const ProfileContent = ({ user }) => {
  const {
    username,
    postsCount,
    followersCount,
    followingCount,
    fullName,
    bio,
    website,
  } = user;

  const stats = { postsCount, followersCount, followingCount };

  return (
    <ProfileContentStyled className="profile-content">
      {/* <div className="profile-header">
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
        </div> */}

      <ProfileHeader username={username} />
      <ProfileStats {...stats} />

      {/* <div className="profile-stats">
        <ul className="stats-list">
          <li className="stats-item">
            <span>{postsCount}</span> publications
          </li>
          <li className="stats-item">
            <a href="#">
              <span>{followersCount}</span> followers
            </a>
          </li>
          <li className="stats-item">
            <a href="#">
              <span>{followingCount}</span> suivi(e)s
            </a>
          </li>
        </ul>
      </div> */}

      <div className="profile-bio">
        <h2 className="fullname">{fullName}</h2>
        <p className="bio">{bio}</p>
        <span className="link">
          <AiOutlineLink className="icon-link" />
          <a href={website} target="_blank">
            {website.replace("https://", "")}
          </a>
        </span>
      </div>
    </ProfileContentStyled>
  );
};

export default ProfileContent;

const ProfileContentStyled = styled.div`
  flex: 2;

  /* .profile-header {
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
    } */

  /* .profile-stats {
      .stats-list {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 20px;

        .stats-item {
          span {
            font-weight: ${theme.fonts.weights.semiBold};
          }
        }
      }
    } */

  .profile-bio {
    line-height: 18px;

    .fullname {
      font-size: ${theme.fonts.sizes.S};
      font-weight: ${theme.fonts.weights.semiBold};
    }

    .bio {
      font-size: ${theme.fonts.sizes.S};
    }

    .link {
      color: ${theme.colors.dark};
      font-size: ${theme.fonts.sizes.S};
      font-weight: ${theme.fonts.weights.semiBold};

      display: flex;
      align-items: center;

      .icon-link {
        margin-right: 7px;
        font-size: ${theme.fonts.sizes.M};
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 735px) {
    /* height: 92px; */

    /* .profile-header {
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
      } */

    /* .profile-stats {
        display: none;
      } */

    .profile-bio {
      display: none;
    }
  }
`;
