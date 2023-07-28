import { styled } from "styled-components";
import { theme } from "../../../theme";
import { userProfile } from "../../../assets/data/userData";

const StoryHighlights = () => {
  
  const {storyHighlights : items} = userProfile;
  
  return (
    <StoryHighlightsStyled>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="storyhighlight">
          <button className="storyhighlight-btn">
            <img
              className="storyhighlight-img"
              src={item.coverImage}
              alt={`Photo de ${item.title}`}
            />
          </button>
          <span className="storyhighlight-title">{item.title}</span>
        </li>
        ))}
      </ul>
    </StoryHighlightsStyled>
  );
};

export default StoryHighlights;

const StoryHighlightsStyled = styled.section`
  width: 100%;
  height: 130px;
  /* background: #f5f3f3; */
  margin: 44px 0;
  display: flex;

  .list {
    /* background: lightgrey; */
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 45px;
    flex: 1;
    padding: 0 43px;

    .storyhighlight {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      /* background: lightgoldenrodyellow; */

      .storyhighlight-btn {
        background: 0;
        cursor: pointer;
        width: 87px;
        height: 87px;
        padding: 3px;
        border: 1px solid ${theme.colors.greyMedium};
        border-radius: ${theme.borderRadius.circle};

        .storyhighlight-img  {
          width: 100%;
          height: 100%;
          border-radius: ${theme.borderRadius.circle};
        }
      }

      .storyhighlight-title {
        font-weight: ${theme.fonts.weights.semiBold};
        font-size: ${theme.fonts.sizes.XS};
      }
    }
  }

  @media screen and (max-width: 735px) {
    margin: 21px 0;
    height: 88px;

    .list {
      gap: 6px;
      padding: 0 5px;

      .storyhighlight {
        gap: 6px;
  
        .storyhighlight-btn {
          width: 64px;
          height: 64px;
          padding: 2px;
        }
  
        .storyhighlight-title {
          font-weight: ${theme.fonts.weights.regular};
        }
      }
    }

  }
`;
