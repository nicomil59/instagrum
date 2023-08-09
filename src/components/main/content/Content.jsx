import React, { useState } from "react";
import { styled } from "styled-components";

const Content = () => {
  const [activeTab, setActiveTab] = useState("posts-tab");

  const showTab = (e) => {
    console.log("click on tab");
    console.log(e.target.id);
    setActiveTab(e.target.id);
  };

  return (
    <ContentStyled>
      <div className="tabs">
        <button
          onClick={showTab}
          className={`tab-btn ${activeTab === "posts-tab" ? "active" : ""}`}
          id="posts-tab"
        >
          Publications
        </button>
        <button
          onClick={showTab}
          className={`tab-btn ${activeTab === "reels-tab" ? "active" : ""}`}
          id="reels-tab"
        >
          Reels
        </button>
        <button
          onClick={showTab}
          className={`tab-btn ${activeTab === "tagged-tab" ? "active" : ""}`}
          id="tagged-tab"
        >
          Identifié(e)
        </button>
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
  background-color: lightblue;

  .tabs {
    display: flex;

    .tab-btn {
      flex: 1;
      padding: 10px 0;
      background-color: #eee;
      border: 1px solid #ccc;
      text-align: center;
      cursor: pointer;

      &.active {
        font-weight: bold;
        color: red;
        border-top: 1px solid red;
      }
    }
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
`;
