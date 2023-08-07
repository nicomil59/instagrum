import { styled } from "styled-components";
import { theme } from "../../../theme";

const StoryHighlightItem = ({ title, coverImage }) => {
  return (
    <StoryHighlightItemStyled>
      <button className="storyhighlight-btn">
        <img
          className="storyhighlight-img"
          src={coverImage}
          alt={`Photo de ${title}`}
        />
      </button>
      <span className="storyhighlight-title">{title}</span>
    </StoryHighlightItemStyled>
  );
};

export default StoryHighlightItem;

const StoryHighlightItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

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

  @media screen and (max-width: 735px) {
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
`;
