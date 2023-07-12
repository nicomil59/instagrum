import "./reset.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import { styled } from "styled-components";
import { theme } from "./theme";


function App() {

  return (
    <AppStyled>
      <NavBar />
      <Main />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  color: ${theme.colors.black};
`;
