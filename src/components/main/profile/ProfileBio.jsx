import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { AiOutlineLink } from "react-icons/ai";

const ProfileBio = ({ fullName, bio, website }) => {
  return (
    <ProfileBioStyled className="profile-bio">
      <h2 className="fullname">{fullName}</h2>
      <p className="bio">{bio}</p>
      <span className="link">
        <AiOutlineLink className="icon-link" />
        <a href={website} target="_blank">
          {website.replace("https://", "")}
        </a>
      </span>
    </ProfileBioStyled>
  );
};

export default ProfileBio;

const ProfileBioStyled = styled.div`
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

  @media screen and (max-width: 735px) {
    display: none;
  }
`;
