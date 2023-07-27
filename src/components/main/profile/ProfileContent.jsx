import React from "react";
import { styled } from "styled-components";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileBio from "./ProfileBio";

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
  const userInfo = {fullName, bio, website};

  return (
    <ProfileContentStyled className="profile-content">
      <ProfileHeader username={username} />
      <ProfileStats {...stats} />
      <ProfileBio {...userInfo} />
    </ProfileContentStyled>
  );
};

export default ProfileContent;

const ProfileContentStyled = styled.div`
  flex: 2;
`;
