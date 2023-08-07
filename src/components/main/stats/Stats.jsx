import React from "react";
import { styled } from "styled-components";

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
  background: lightsalmon;
  height: 61px;
`;
