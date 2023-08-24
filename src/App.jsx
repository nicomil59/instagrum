import { theme } from "./theme";
import "./reset.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import { styled } from "styled-components";
import TopBar from "./components/navbar/TopBar";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <AppStyled>
      <NavBar />
      <Main />
      <Footer />
      <TopBar />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  color: ${theme.colors.black};
`;
