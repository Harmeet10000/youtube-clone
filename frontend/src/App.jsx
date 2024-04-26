import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

const App = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>video content</Wrapper>
      </Main>
    </Container>
  );
};

export default App;
