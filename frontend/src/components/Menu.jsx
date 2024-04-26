import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Menu = () => {
  return <Container>menu</Container>;
};

export default Menu;
