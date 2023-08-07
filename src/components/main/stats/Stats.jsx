import React from 'react'
import { styled } from 'styled-components';

const Stats = ({className}) => {
  return (
    <StatsStyled className={className}>Stats</StatsStyled>
  )
}

export default Stats

const StatsStyled = styled.section`
  background: lightsalmon;
`;