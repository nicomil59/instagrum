import { theme } from "./theme";
import { styled } from "styled-components";
import "./reset.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import TopBar from "./components/navbar/TopBar";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <AppStyled>
      <NavBar />
      <div className="wrapper">
        <div className="top">
          <Main />
        </div>
        <div className="bottom">
          <Footer />
        </div>
      </div>
      <TopBar />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  color: ${theme.colors.black};

  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
