import { styled } from "styled-components";
import Profile from "./profile/Profile";
import StoryHighlights from "./storyhighlights/StoryHighlights";
import Stats from "./stats/Stats";

const Main = () => {
  return (
    <MainStyled>
      <div className="main-container">
        <Profile />
        <StoryHighlights />
        <Stats className="stats-mobile" />
      </div>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  min-height: 100vh;
  margin-left: 244px;

  .main-container {
    /* background-color: lightblue; */
    max-width: 975px;
    margin: 0 auto;
    padding: 30px 20px 0;

    .stats-mobile {
      display: none;
    }
  }

  @media screen and (min-width: 1920px) {
    margin-left: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1263px) {
    margin-left: 72px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0px;
    /* min-height: calc(100vh - 50px); */
    margin-top: 44px;
  }

  @media screen and (max-width: 735px) {
    .main-container {
      padding: 0;

      .stats-mobile {
        display: block;
      }
    }
  }
`;
