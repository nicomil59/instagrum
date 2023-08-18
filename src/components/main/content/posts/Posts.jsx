import { styled } from "styled-components";

const Posts = () => {
  return (
    <PostsStyled>
      <div className="post-item">1</div>
      <div className="post-item">2</div>
      <div className="post-item">3</div>
      <div className="post-item">4</div>
      <div className="post-item">5</div>
      <div className="post-item">6</div>
      <div className="post-item">7</div>
      <div className="post-item">8</div>
      <div className="post-item">9</div>
      <div className="post-item">10</div>
      <div className="post-item">11</div>
      <div className="post-item">12</div>
      <div className="post-item">13</div>
    </PostsStyled>
  )
}

export default Posts

const PostsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;

  .post-item {
    background-color: cornsilk;
    aspect-ratio: 1;
  }

  @media screen and (max-width: 735px) {
    gap: 3px;
  }
`;