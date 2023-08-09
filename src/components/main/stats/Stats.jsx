import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const Stats = ({ postsCount, followersCount, followingCount, className }) => {
  return (
    <StatsStyled className={className}>
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
    </StatsStyled>
  );
};

export default Stats;

const StatsStyled = styled.section`
  .stats-list {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    border-top: 1px solid ${theme.colors.greyMedium};

    .stats-item {
      flex: 1;
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      font-size: ${theme.fonts.sizes.S};
      color: ${theme.colors.greySemiDark};
      line-height: 18px;

      span {
        font-weight: ${theme.fonts.weights.semiBold};
        color: ${theme.colors.black};
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
