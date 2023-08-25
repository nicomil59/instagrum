import { styled } from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { theme } from "../../theme";
import FooterItem from "./FooterItem";

const Footer = () => {
  const footerItems = [
    {
      text: "Metu",
      underline: true,
    },
    {
      text: "À propos",
      underline: true,
    },
    {
      text: "Blog",
      underline: true,
    },
    {
      text: "Emplois",
      underline: false,
    },
    {
      text: "Aide",
      underline: true,
    },
    {
      text: "API",
      underline: true,
    },
    {
      text: "Confidentialité",
      underline: false,
    },
    {
      text: "Conditions",
      underline: false,
    },
    {
      text: "Comptes principaux",
      underline: false,
    },
    {
      text: "Lieux",
      underline: false,
    },
    {
      text: "Instagrum Lite",
      underline: false,
    },
    {
      text: "Threads",
      underline: true,
    },
    {
      text: "Importation des contacts et non-utilisateurs",
      underline: false,
    },
    {
      text: "Metu Verified",
      underline: true,
    },
  ];

  return (
    <FooterStyled>
      <div className="footer-container">
        <ul className="footer-links">
          {footerItems.map((item, index) => (
            <FooterItem key={index} {...item} />
          ))}

        </ul>
        <div className="footer-bottom">
          <span>
            Français <BsChevronDown className="icon" />
          </span>
          <span>&#xA9; 2023 Instagrum par Nicomil</span>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  margin-left: 244px;
  font-size: ${theme.fonts.sizes.XS};
  color: ${theme.colors.greySemiDark};
  letter-spacing: 0.1px;

  .footer-container {
    margin: 0 auto;
    padding: 24px 20px 58px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;

    .footer-links {
      list-style-type: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 16px;
      row-gap: 7px;
    }

    .footer-bottom {
      display: flex;
      gap: 16px;

      span:first-child {
        display: flex;
        gap: 4px;
        cursor: pointer;

        .icon {
          color: ${theme.colors.greySemiDark};
        }
      }
    }
  }

  @media screen and (min-width: 1920px) {
    margin-left: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1263px) {
    margin-left: 72px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
