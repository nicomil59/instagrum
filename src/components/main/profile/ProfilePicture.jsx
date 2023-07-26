import { styled } from "styled-components";

const ProfilePicture = ({ imgUrl, username }) => {
  return (
    <ProfilePictureStyled>
      <img src={imgUrl} alt={`Photo de profil de ${username}`} />
    </ProfilePictureStyled>
  );
};

export default ProfilePicture;

const ProfilePictureStyled = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: block;
  }

  @media screen and (max-width: 735px) {
    flex: 0;
    /* margin-right: 28px; */

    img {
      width: 77px;
      height: 77px;
    }
  }
`;
