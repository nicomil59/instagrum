import { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { BsGrid3X3 } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlinePersonPin } from "react-icons/md";
import TabItem from "./TabItem";
import Posts from "./posts/Posts";
import Reels from "./Reels";
import Tagged from "./Tagged";

const Content = () => {
  const [activeTab, setActiveTab] = useState("posts-tab");

  let tabContent = "";

  if (activeTab === "posts-tab") {
    tabContent = <Posts />;
  } else if (activeTab === "reels-tab") {
    tabContent = <Reels />;
  } else if (activeTab === "tagged-tab") {
    tabContent = <Tagged />;
  }

  return (
    <ContentStyled>
      <div className="tabs">
        <TabItem
          id="posts-tab"
          label="Publications"
          Icon={<BsGrid3X3 className="icon" />}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabItem
          id="reels-tab"
          label="Reels"
          Icon={<AiOutlinePlaySquare className="icon" />}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabItem
          id="tagged-tab"
          label="Tagged"
          Icon={<MdOutlinePersonPin className="icon" />}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

      </div>

      <div className="content">
        {tabContent}
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
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 735px) {
    .tabs {
      gap: 0;
      height: 44px;
    }
  }
`;