import { styled } from "styled-components";
import { theme } from "../../../theme";

const TabItem = ({ id, label, Icon, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <TabItemStyled
      onClick={handleClick}
      className={activeTab === id ? "active" : ""}
    >
      {Icon}
      <span className="btn-label">{label}</span>
    </TabItemStyled>
  );
};

export default TabItem;

const TabItemStyled = styled.button`
  padding: 18px 0;
  background-color: ${theme.colors.white};
  border: 0;
  text-align: center;
  cursor: pointer;
  color: ${theme.colors.greySemiDark};
  font-weight: ${theme.fonts.weights.semiBold};
  font-size: ${theme.fonts.sizes.XS};
  text-transform: uppercase;
  letter-spacing: 1px;

  display: flex;
  align-items: center;

  &.active {
    color: ${theme.colors.black};
    border-top: 1px solid ${theme.colors.black};
    margin-top: -1px;
  }

  .icon {
    margin-right: 6px;
  }

  @media screen and (max-width: 735px) {
    font-size: 24px;

    .btn-label {
      display: none;
    }
  }
`;
