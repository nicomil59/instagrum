import { AiOutlinePlaySquare } from "react-icons/ai";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const Reels = () => {
  return (
    <ReelsStyled>
      <AiOutlinePlaySquare className="icon" />
      <p className="tagged-text">Aucun Reel</p>
    </ReelsStyled>
  );
};

export default Reels;

const ReelsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 60px;

  .icon {
    font-size: 62px;
    border: 2px solid ${theme.colors.black};
    border-radius: 50%;
    padding: 8px;
  }

  .tagged-text {
    margin-top: 24px;
    font-size: 30px;
    font-weight: ${theme.fonts.weights.semiBold};
  }
`;
