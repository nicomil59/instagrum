import { styled } from "styled-components";
import { userPosts } from "../../../../assets/data/userData";
import Post from "./Post";

const Posts = () => {
  return (
    <PostsStyled>
      <Post {...userPosts[0]} />
    </PostsStyled>
  );
};

export default Posts;

const PostsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;

  @media screen and (max-width: 735px) {
    gap: 3px;
  }
`;
