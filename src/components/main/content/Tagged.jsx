import { MdOutlinePersonPin } from "react-icons/md";
import { styled } from "styled-components";
import { theme } from "../../../theme";

const Tagged = () => {
  return (
    <TaggedStyled>
      <MdOutlinePersonPin className="icon" />
      <p className="tagged-text">Aucune photo</p>
    </TaggedStyled>
  );
};

export default Tagged;

const TaggedStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 60px;

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