import { styled } from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";
import { theme } from "../../../../theme";
import img1 from "../../../../assets/images/post-images/post-image01.jpg";

const Posts = () => {
  return (
    <PostsStyled>
      <div className="post-item">
        <a className="post-link" href="#">
          <img className="post-img" src={img1} alt="agrums" />
          <div className="post-overlay">
            <div className="stats">
              <div className="stats-item likes">
                <AiFillHeart />
                <span> 4</span>
              </div>
              <div className="stats-item comments">
                <BiSolidMessageRounded />
                <span> 0</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="post-item">2</div>
      <div className="post-item">3</div>
      <div className="post-item">4</div>
      <div className="post-item">5</div>
      <div className="post-item">6</div>
      <div className="post-item">7</div>
      <div className="post-item">8</div>
      <div className="post-item">9</div>
      <div className="post-item">10</div>
    </PostsStyled>
  );
};

export default Posts;

const PostsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;

  .post-item {
    background-color: cornsilk;
    aspect-ratio: 1;

    .post-link {
      position: relative;

      .post-img {
        display: block;
        width: 100%;
      }

      .post-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.semiBold};
        font-size: 22px;
        background: rgba(0, 0, 0, 0.2);

        display: none;
        justify-content: center;
        align-items: center;

        .stats {
          display: flex;
          gap: 28px;
          align-items: center;
          justify-content: center;

          .stats-item {
            display: flex;
            justify-content: center;
            gap: 6px;

            span {
              font-size: ${theme.fonts.sizes.M};
            }
          }
        }
      }

      &:hover {
        .post-overlay {
          display: flex;
        }
      }
    }
  }

  @media screen and (max-width: 735px) {
    gap: 3px;

    .post-item {
      .post-link {
        .post-overlay {
          .stats {
            flex-direction: column;
            gap: 8px;
          }
        }
      }
    }
  }
`;
