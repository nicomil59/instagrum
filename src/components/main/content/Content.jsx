import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { BsGrid3X3 } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlinePersonPin } from "react-icons/md";
import TabItem from "./TabItem";

const Content = () => {
  const [activeTab, setActiveTab] = useState("posts-tab");

  // const showTab = (e) => {
  //   console.log("click on tab");
  //   console.log(e.target.parentNode);
  //   setActiveTab(e.target.parentNode.id);
  // };

  return (
    <ContentStyled>
      <div className="tabs">
        
        {/* <button
          onClick={showTab}
          className={`tab-btn ${activeTab === "posts-tab" ? "active" : ""}`}
          id="posts-tab"
        >
          <BsGrid3X3 className="icon" />
          <span className="btn-label">Publications</span>
        </button> */}

        <TabItem id="posts-tab" label="Publications" Icon={<BsGrid3X3 className="icon" />} activeTab={activeTab} setActiveTab={setActiveTab} />

        <TabItem id="reels-tab" label="Reels" Icon={<AiOutlinePlaySquare className="icon" />} activeTab={activeTab} setActiveTab={setActiveTab} />

        <TabItem id="tagged-tab" label="Tagged" Icon={<MdOutlinePersonPin className="icon" />} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* <button
          onClick={showTab}
          className={`tab-btn ${activeTab === "reels-tab" ? "active" : ""}`}
          id="reels-tab"
        >
          <AiOutlinePlaySquare className="icon" />
          <span className="btn-label">Reels</span>
        </button> */}

        {/* <button
          onClick={showTab}
          className={`tab-btn ${activeTab === "tagged-tab" ? "active" : ""}`}
          id="tagged-tab"
        >
          <MdOutlinePersonPin className="icon" />
          <span className="btn-label">Identifié(e)</span>
        </button> */}

      </div>

      <div className="content">
        <div
          className={`tab-content ${activeTab === "posts-tab" ? "active" : ""}`}
          id="posts"
        >
          <p>Liste des publications...</p>
        </div>

        <div
          className={`tab-content ${activeTab === "reels-tab" ? "active" : ""}`}
          id="reels"
        >
          <p>Liste des reels...</p>
        </div>

        <div
          className={`tab-content ${
            activeTab === "tagged-tab" ? "active" : ""
          }`}
          id="tagged"
        >
          <p>Liste des identifié(e)s...</p>
        </div>
      </div>
    </ContentStyled>
  );
};

export default Content;

const ContentStyled = styled.section`
  border-top: 1px solid ${theme.colors.greyMedium};

  .tabs {
    display: flex;
    justify-content: center;
    gap: 60px;
    height: 52px;

    /* .tab-btn {
      padding: 18px 0;
      background-color: ${theme.colors.white};
      border: 0;
      text-align: center;
      cursor: pointer;
      color: ${theme.colors.greySemiDark};
      font-weight: ${theme.fonts.weights.semiBold};
      font-size: ${theme.fonts.sizes.XS};
      text-transform: uppercase;
      letter-spacing: 1px;

      display: flex;
      align-items: center;

      height: 52px;

      &.active {
        color: ${theme.colors.black};
        border-top: 1px solid ${theme.colors.black};

        margin-top: -1px;
      }

      .icon {
        margin-right: 6px;
      }
    } */
  }

  .content {
    background-color: lightblue;
    padding: 20px;

    .tab-content {
      display: none;

      &.active {
        display: block;
      }
    }
  }

  @media screen and (max-width: 735px) {
    .tabs {
      gap: 0;
      height: 44px;
    }
  }
`;
