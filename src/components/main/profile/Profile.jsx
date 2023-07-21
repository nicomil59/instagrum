import React from "react";
import { styled } from "styled-components";
import { userProfile } from "../../../assets/data/userData";
import { AiOutlineLink } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

const Profile = () => {
  return (
    <ProfileStyled>
      <div className="profile-picture">
        <img src={userProfile.profilePictureUrl} alt="profile picture" />
      </div>

      <div className="profile-content">
        <div className="profile-header">
          <h1>{userProfile.username}</h1>
          <div className="buttons">
            <button>Suivre</button>
            <button>
              <FiUserPlus />
            </button>
          </div>
          <div className="options">
            <BsThreeDots />
          </div>
        </div>

        <div className="profile-stats">
          <ul>
            <li>
              <span>{userProfile.postsCount}</span> publications
            </li>
            <li>
              <span>{userProfile.followersCount}</span> followers
            </li>
            <li>
              <span>{userProfile.followingCount}</span> suivi(e)s
            </li>
          </ul>
        </div>

        <div className="profile-bio">
          <h2>{userProfile.fullName}</h2>
          <p>{userProfile.bio}</p>
          <span>
            <AiOutlineLink /> {userProfile.website}
          </span>
        </div>
      </div>

      <div className="profile-bio-mobile">
        <h2>{userProfile.fullName}</h2>
        <p>{userProfile.bio}</p>
        <span>
          <AiOutlineLink /> {userProfile.website}
        </span>
      </div>
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.section`
  background-color: lightsalmon;

  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  .profile-picture {
    background: lightgrey;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }

  .profile-content {
    background: lightpink;

    .profile-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 8px;

      background: #eee;
    }
  }

  .profile-bio-mobile {
    display: none;
  }

  @media screen and (max-width: 735px) {
    flex-wrap: wrap;
    
    .profile-content {
      .profile-header {
        flex-wrap: wrap;

        h1 {
          order: 1;
        }

        .options {
          order: 2;
        }

        .buttons {
          order: 3;
          width: 100%;
        }
      }

      .profile-bio {
        display: none;
      }
    }
    .profile-bio-mobile {
      margin-top: 24px;
      display: block;
      width: 100%;
    }
  }
`;
