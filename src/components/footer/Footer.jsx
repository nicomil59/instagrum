import { styled } from "styled-components";
import { BsChevronDown } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterStyled>
        <div className="footer-container">
            <ul className="footer-links">
                <li className="footer-item">
                    <a className="footer-link" href="#">Metu</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">À propos</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Blog</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Emplois</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Aide</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">API</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Confidentialité</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Conditions</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Comptes principaux</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Lieux</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Instagrum Lite</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Threads</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Importation des contacts et non-utilisateurs</a>
                </li>
                <li className="footer-item">
                    <a className="footer-link" href="#">Metu Verified</a>
                </li>
            </ul>
            <div className="footer-bottom">
              <span>Français <BsChevronDown /></span>
              <span>&#xA9; 2023 Instagrum par Nicomil</span>
            </div>
        </div>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.footer`
  background: pink;
`;