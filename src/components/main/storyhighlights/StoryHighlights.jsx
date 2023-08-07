import { styled } from "styled-components";
import { userProfile } from "../../../assets/data/userData";
import StoryHighlightItem from "./StoryHighlightItem";

const StoryHighlights = () => {
  
  const {storyHighlights : items} = userProfile;
  
  return (
    <StoryHighlightsStyled>
      <ul className="list">
        {items.map((item, index) => <StoryHighlightItem {...item} key={index} />)}
      </ul>
    </StoryHighlightsStyled>
  );
};

export default StoryHighlights;

const StoryHighlightsStyled = styled.section`
  width: 100%;
  height: 130px;
  margin: 44px 0;
  display: flex;

  .list {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 45px;
    flex: 1;
    padding: 0 43px;
  }

  @media screen and (max-width: 735px) {
    margin: 21px 0;
    height: 88px;

    .list {
      gap: 6px;
      padding: 0 5px;
    }
  }
`;
