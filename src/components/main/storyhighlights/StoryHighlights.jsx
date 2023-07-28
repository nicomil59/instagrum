import { styled } from "styled-components";
import { theme } from "../../../theme";

const StoryHighlights = () => {
  return (
    <StoryHighlightsStyled>
      <ul className="list">
        <li className="storyhighlight">
          <button className="storyhighlight-btn">
            <img
              className="storyhighlight-img"
              src="https://picsum.photos/200"
              alt="story highlight cover"
            />
          </button>
          <span className="storyhighlight-title">Title</span>
        </li>
        <li className="storyhighlight">
          <button className="storyhighlight-btn">
            <img
              className="storyhighlight-img"
              src="https://picsum.photos/200"
              alt="story highlight cover"
            />
          </button>
          <span className="storyhighlight-title">Title</span>
        </li>
        <li className="storyhighlight">
          <button className="storyhighlight-btn">
            <img
              className="storyhighlight-img"
              src="https://picsum.photos/200"
              alt="story highlight cover"
            />
          </button>
          <span className="storyhighlight-title">Title</span>
        </li>
        <li className="storyhighlight">
          <button className="storyhighlight-btn">
            <img
              className="storyhighlight-img"
              src="https://picsum.photos/200"
              alt="story highlight cover"
            />
          </button>
          <span className="storyhighlight-title">Title</span>
        </li>
        
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
