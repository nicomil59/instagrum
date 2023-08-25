import { styled } from "styled-components";

const FooterItem = ({ text, underline }) => {
  return (
    <FooterItemStyled>
      <a className={`footer-link ${underline ? "underline": ""}`} href="#">
        {text}
      </a>
    </FooterItemStyled>
  );
};

export default FooterItem;

const FooterItemStyled = styled.li`
  .footer-link {
    white-space: nowrap;

    &:hover.underline {
      text-decoration: underline;
    }
  }
`;
