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
            <button><FiUserPlus /></button>
          </div>
          <div className="options"><BsThreeDots /></div>
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
          <span><AiOutlineLink /> {userProfile.website}</span>
        </div>
        
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
  }
`;
