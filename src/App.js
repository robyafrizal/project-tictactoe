import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Game from "./components/game";
import Button from "./components/button";
import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;
  padding: 0.5em
  background: ${props => (props.dark ? "#bb1e1e" : "#000")}
  margin-top: 50px
`;
const Section = styled(Wrapper)`
  color: yellow;
`;

const Header = styled.h3`
  background: #000
  color: #fff
`;
function App() {
  return (
    <div>
      <NavBar />
      <Game />
      <Button />
      <Wrapper dark>
        <br />
        <Header>Play With Heart</Header>
      </Wrapper>
      <Section>Love Games</Section>
    </div>
  );
}

export default App;
