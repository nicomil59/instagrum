import { styled } from "styled-components";
import { userProfile } from "../../assets/data/userData";
import Profile from "./profile/Profile";
import StoryHighlights from "./storyhighlights/StoryHighlights";
import Stats from "./stats/Stats";
import Content from "./content/Content";

const Main = () => {
  
  const {postsCount, followersCount, followingCount} = userProfile;
  const stats = { postsCount, followersCount, followingCount };
  
  return (
    <MainStyled>
      <div className="main-container">
        <Profile />
        <StoryHighlights />
        <Stats className="stats-mobile" {...stats} />
        <Content />
      </div>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.main`
  margin-left: 244px;

  .main-container {
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
