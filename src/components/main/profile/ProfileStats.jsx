import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const ProfileStats = ({postsCount, followersCount, followingCount}) => {
  return (
    <ProfileStatsStyled className="profile-stats">
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
    </ProfileStatsStyled>
  );
};

export default ProfileStats;

const ProfileStatsStyled = styled.div`
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

  @media screen and (max-width: 735px) {
    display: none;
  }
`;
