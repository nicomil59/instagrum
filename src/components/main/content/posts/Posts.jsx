import { styled } from "styled-components";
import { userPosts } from "../../../../assets/data/userData";
import Post from "./Post";

const Posts = () => {
  
  const allPosts = [...userPosts].reverse();

  return (
    <PostsStyled>
      {allPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
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
