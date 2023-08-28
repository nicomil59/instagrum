import { styled } from "styled-components";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePlaySquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import NavItem from "./NavItem";

const NavMenu = () => {
  return (
    <NavMenuStyled>
      <ul>
        <NavItem Icon={<GrHomeRounded className="icon" />} text="Accueil" />
        <NavItem Icon={<RiSearchLine className="icon" />} text="Recherche" />
        <NavItem
          Icon={<AiOutlineCompass className="icon" />}
          text="Découvrir"
        />
        <NavItem Icon={<AiOutlinePlaySquare className="icon" />} text="Reels" />
        <NavItem Icon={<PiPaperPlaneTiltBold className="icon" />} text="Messages" />
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
  margin-bottom: auto;

  ul {
    list-style-type: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 0;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      li:nth-child(2) {
        display: none;
        order: 2;
      }

      li:nth-child(6) {
        display: none;
        order: 6;
      }

      li:nth-child(1) {
        order: 1;
      }
      li:nth-child(3) {
        order: 3;
      }
      li:nth-child(4) {
        order: 4;
      }
      li:nth-child(5) {
        order: 7;
      }
      li:nth-child(7) {
        order: 5;
      }
      li:nth-child(8) {
        order: 8;
      }
    }
  }
`;
