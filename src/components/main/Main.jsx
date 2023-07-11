import { styled } from "styled-components";

const Main = () => {
  return <MainStyled>Main</MainStyled>;
};

export default Main;

const MainStyled = styled.main`
  background: lightblue;

  height: 100vh;
  margin-left: 244px;

  @media screen and (min-width: 1920px) {
    margin-left: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1264px) {
    margin-left: 72px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0px;
    height: calc(100vh - 50px);
  }
`;
