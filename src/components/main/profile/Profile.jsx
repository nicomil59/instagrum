import React from "react";
import { styled } from "styled-components";
import { userProfile } from "../../../assets/data/userData";
import ProfilePicture from "./ProfilePicture";
import ProfileContent from "./ProfileContent";
import ProfileBio from "./ProfileBio";

const Profile = () => {
  return (
    <ProfileStyled>
      <ProfilePicture
        imgUrl={userProfile.profilePictureUrl}
        username={userProfile.username}
      />
      <ProfileContent user={userProfile} />
      <ProfileBio fullName={userProfile.fullName} bio={userProfile.bio} website={userProfile.website} className="profile-bio-mobile" />
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 8px;

  .profile-bio-mobile {
    display: none;
  }

  @media screen and (max-width: 735px) {
    flex-wrap: wrap;
    gap: 28px;
    margin: 70px 16px 16px;
    align-items: flex-start;

    .profile-bio-mobile {
      margin-top: -4px;
      display: block;
      width: 100%;
    }
  }
`;
