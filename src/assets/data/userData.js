import profilPicture from "../images/lemon-avatar.png";
import storyhighImage1 from "../images/storyhigh-images/sh-img1.jpg"
import storyhighImage2 from "../images/storyhigh-images/sh-img2.jpg"
import storyhighImage3 from "../images/storyhigh-images/sh-img3.jpg"
import storyhighImage4 from "../images/storyhigh-images/sh-img4.jpg"

export const userProfile = {
  username: "bluelemon59",
  fullName: "Blue Lemon",
  bio: "Je suis un fan de citrons. Je les aime dans mes plats, mes boissons et même mes desserts. #lemonlover",
  website: "https://www.bluelemon59.com",
  followersCount: 163,
  followingCount: 229,
  postsCount: 22,
  profilePictureUrl: profilPicture,
  storyHighlights: [
    {
      title: "Lorem",
      coverImage: storyhighImage1,
    },
    {
      title: "Ipsum",
      coverImage: storyhighImage2,
    },
    {
      title: "Dolor",
      coverImage: storyhighImage3,
    },
    {
      title: "Sit",
      coverImage: storyhighImage4,
    }
  ],
};
