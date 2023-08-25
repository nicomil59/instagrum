import { styled } from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";
import { theme } from "../../../../theme";

const Post = ({ imageUrl, caption, likesCount, comments }) => {
  return (
    <PostStyled>
      <a className="post-link" href="#">
        <img className="post-img" src={imageUrl} alt={caption} />
        <div className="post-overlay">
          <div className="stats">
            <div className="stats-item likes">
              <AiFillHeart />
              <span> {likesCount}</span>
            </div>
            <div className="stats-item comments">
              <BiSolidMessageRounded />
              <span> {comments}</span>
            </div>
          </div>
        </div>
      </a>
    </PostStyled>
  );
};

export default Post;

const PostStyled = styled.article`
  aspect-ratio: 1;

  .post-link {
    position: relative;
    display: block;

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

  @media screen and (max-width: 735px) {
    .post-link {
      .post-overlay {
        .stats {
          flex-direction: column;
          gap: 8px;
        }
      }
    }
  }
`;
