import { styled } from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { theme } from "../../theme";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-container">
        <ul className="footer-links">
          <li className="footer-item">
            <a className="footer-link underline" href="#">
              Metu
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link underline" href="#">
              À propos
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link underline" href="#">
              Blog
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">
              Emplois
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link underline" href="#">
              Aide
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link underline" href="#">
              API
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">
              Confidentialité
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">
              Conditions
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">
              Comptes principaux
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">
              Lieux
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">
              Instagrum Lite
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link underline" href="#">
              Threads
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link" href="#">
              Importation des contacts et non-utilisateurs
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-link underline" href="#">
              Metu Verified
            </a>
          </li>
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

      .footer-item {
        .footer-link {
          white-space: nowrap;

          &:hover.underline {
            text-decoration: underline;
          }
        }
      }
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
