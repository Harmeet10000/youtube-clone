import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar.jsx";
import { darkTheme, lightTheme } from "./utils/themes.js";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import { useState } from "react";
import SignIn from "./pages/SignIn.jsx";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 10;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video" />
                  <Route path=":id" element={<Video />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
