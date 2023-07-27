import { styled } from "styled-components";

const StoryHighlights = () => {
  return <StoryHighlightsStyled>StoryHighlights</StoryHighlightsStyled>;
};

export default StoryHighlights;

const StoryHighlightsStyled = styled.section`
  width: 100%;
  height: 130px;
  background: lightblue;
  margin: 44px 0;

  @media screen and (max-width: 735px) {
    margin: 21px 0;
  }
`;
