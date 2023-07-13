import { styled } from "styled-components";
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePlaySquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import NavItem from "./NavItem";

const NavMenu = () => {
  return (
    <NavMenuStyled>
      <ul>
        <NavItem Icon={<AiFillHome className="icon" />} text="Accueil" />
        <NavItem Icon={<RiSearchLine className="icon" />} text="Recherche" />
        <NavItem
          Icon={<AiOutlineCompass className="icon" />}
          text="Découvrir"
        />
        <NavItem Icon={<AiOutlinePlaySquare className="icon" />} text="Reels" />
        <NavItem Icon={<FaRegPaperPlane className="icon" />} text="Messages" />
        <NavItem
          Icon={<AiOutlineHeart className="icon" />}
          text="Notifications"
        />
        <NavItem Icon={<AiOutlinePlusSquare className="icon" />} text="Créer" />
        <NavItem
          Img={
            <img
              src="https://i.pravatar.cc/24"
              alt="profile avatar"
              className="profile-img"
            />
          }
          text="Profil"
        />
      </ul>
    </NavMenuStyled>
  );
};

export default NavMenu;

const NavMenuStyled = styled.nav`
  /* background: lightsalmon; */

  margin-bottom: auto;

  ul {
    list-style-type: none;
  }
`;
