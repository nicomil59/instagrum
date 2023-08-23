import profilPicture from "../images/lemon-avatar.png";
import storyhighImage1 from "../images/storyhigh-images/sh-img1.jpg"
import storyhighImage2 from "../images/storyhigh-images/sh-img2.jpg"
import storyhighImage3 from "../images/storyhigh-images/sh-img3.jpg"
import storyhighImage4 from "../images/storyhigh-images/sh-img4.jpg"
import postImage01 from "../images/post-images/post-image01.jpg";
import postImage02 from "../images/post-images/post-image02.jpg";
import postImage03 from "../images/post-images/post-image03.jpg";
import postImage04 from "../images/post-images/post-image04.jpg";
import postImage05 from "../images/post-images/post-image05.jpg";
import postImage06 from "../images/post-images/post-image06.jpg";
import postImage07 from "../images/post-images/post-image07.jpg";
import postImage08 from "../images/post-images/post-image08.jpg";
import postImage09 from "../images/post-images/post-image09.jpg";
import postImage10 from "../images/post-images/post-image10.jpg";


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

export const userPosts = [
  {
    imageUrl: postImage01,
    caption: "Some agrums",
    likesCount: 14,
    comments: 8
  },
  {
    imageUrl: postImage02,
    caption: "sliced agrums",
    likesCount: 20,
    comments: 3
  },
  {
    imageUrl: postImage03,
    caption: "Slices of lemon",
    likesCount: 7,
    comments: 1
  },
  {
    imageUrl: postImage04,
    caption: "Lemon close-up",
    likesCount: 12,
    comments: 5
  },
  {
    imageUrl: postImage05,
    caption: "Lemon tree",
    likesCount: 5,
    comments: 1
  },
  {
    imageUrl: postImage06,
    caption: "Sliced lemon",
    likesCount: 3,
    comments: 2
  },
  {
    imageUrl: postImage07,
    caption: "Water with lemon pieces",
    likesCount: 6,
    comments: 3
  },
  {
    imageUrl: postImage08,
    caption: "Several sliced lemons",
    likesCount: 31,
    comments: 15
  },
  {
    imageUrl: postImage09,
    caption: "lemon pieces with a juicer",
    likesCount: 8,
    comments: 2
  },
  {
    imageUrl: postImage10,
    caption: "pieces of lemon, orange and kiwi",
    likesCount: 3,
    comments: 0
  },
];
