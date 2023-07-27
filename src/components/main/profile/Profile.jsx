import React from "react";
import { styled } from "styled-components";
import { userProfile } from "../../../assets/data/userData";
import { AiOutlineLink } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { theme } from "../../../theme";
import ProfilePicture from "./ProfilePicture";
import ProfileContent from "./ProfileContent";
import ProfileBio from "./ProfileBio";

const Profile = () => {
  return (
    <ProfileStyled>
      {/* <div className="profile-picture">
        <button className="picture-btn">
          <img
            src={userProfile.profilePictureUrl}
            alt={`Photo de profil de ${userProfile.username}`}
          />
        </button>
      </div> */}
      <ProfilePicture
        imgUrl={userProfile.profilePictureUrl}
        username={userProfile.username}
      />

      <ProfileContent user={userProfile} />

      {/* <div className="profile-content">
        <div className="profile-header">
          <h1>{userProfile.username}</h1>
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
        </div>

        <div className="profile-stats">
          <ul className="stats-list">
            <li className="stats-item">
              <span>{userProfile.postsCount}</span> publications
            </li>
            <li className="stats-item">
              <a href="#">
                <span>{userProfile.followersCount}</span> followers
              </a>
            </li>
            <li className="stats-item">
              <a href="#">
                <span>{userProfile.followingCount}</span> suivi(e)s
              </a>
            </li>
          </ul>
        </div>

        <div className="profile-bio">
          <h2 className="fullname">{userProfile.fullName}</h2>
          <p className="bio">{userProfile.bio}</p>
          <span className="link">
            <AiOutlineLink className="icon-link" />
            <a href={userProfile.website} target="_blank">
              {userProfile.website.replace("https://", "")}
            </a>
          </span>
        </div>
      </div> */}

      {/* <div className="profile-bio-mobile">
        <h2>{userProfile.fullName}</h2>
        <p>{userProfile.bio}</p>
        <span>
          <AiOutlineLink className="icon-link" />
          <a href={userProfile.website} target="_blank">
            {userProfile.website.replace("https://", "")}
          </a>
        </span>
      </div> */}

      <ProfileBio fullName={userProfile.fullName} bio={userProfile.bio} website={userProfile.website} className="profile-bio-mobile" />
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.section`
  /* background-color: white; */

  display: flex;
  align-items: center;
  gap: 30px;

  margin-top: 8px;

  /* .profile-picture {
    flex: 1;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .picture-btn {
      border: 0;
      background-color: inherit;
      cursor: pointer;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: block;
      }
    }
  } */

  /* .profile-content {
    flex: 2;

    .profile-header {
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
    }

    .profile-stats {
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
    }

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
  } */

  .profile-bio-mobile {
    display: none;
    /* line-height: 18px; */
  }

  @media screen and (max-width: 735px) {
    flex-wrap: wrap;
    gap: 28px;
    /* gap: 0; */
    margin: 70px 16px 16px;
    align-items: flex-start;

    /* .profile-picture {
      flex: 0;

      margin-right: 28px;

      .picture-btn {
        img {
          width: 77px;
          height: 77px;
        }
      }
    } */

    /* .profile-content {

      .profile-header {
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

      .profile-stats {
        display: none;
      }

      .profile-bio {
        display: none;
      }
    } */

    .profile-bio-mobile {
      margin-top: -4px;
      display: block;
      width: 100%;

      /* h2 {
        font-size: ${theme.fonts.sizes.S};
        font-weight: ${theme.fonts.weights.semiBold};
      }

      p {
        font-size: ${theme.fonts.sizes.S};
      }

      span {
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
      } */
    }
  }
`;
