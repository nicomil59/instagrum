import { styled } from "styled-components";
import { AiFillHome, AiOutlineCompass, AiOutlineHeart, AiOutlinePlaySquare, AiOutlinePlusSquare, AiOutlineSearch } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa6";
import { theme } from "../../theme";

const NavMenu = () => {
  return (
    <NavMenuStyled>
      <ul>
        <li>
          <a href="#">
            <AiFillHome className="icon"/>
            <span className="text">Accueil</span>
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineSearch className="icon"/>
            <span className="text">Recherche</span>
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineCompass className="icon"/>
            <span className="text">Découvrir</span>
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlinePlaySquare className="icon"/>
            <span className="text">Reels</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegPaperPlane className="icon"/>
            <span className="text">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineHeart className="icon"/>
            <span className="text">Notifications</span>
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlinePlusSquare className="icon"/>
            <span className="text">Créer</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://i.pravatar.cc/24" alt="profile avatar" className="profile-img" />
            <span className="text">Profil</span>
          </a>
        </li>
      </ul>
    </NavMenuStyled>
  );
};

export default NavMenu;

const NavMenuStyled = styled.nav`
  /* background: lightsalmon; */

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    padding: 12px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background-color 0.3s;
  }

  a:hover {
    background-color: ${theme.colors.greyExtraLight};
    transition: background-color 0.3s;
  }

  .icon {
    font-size: 1.5rem;
  }
  
  .icon, .profile-img {
    margin-right: 1rem;
    transition: transform 0.3s;
  }

  .profile-img {
    border-radius: ${theme.borderRadius.circle};
  }
  
  a:hover .icon, a:hover .profile-img {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;
