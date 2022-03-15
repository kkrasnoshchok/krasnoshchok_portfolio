import React, { FC } from "react";
import s from "../styles/scss/app.module.scss";
import { GlobalStyles, SContainer } from "../styles/components";
import { Header } from "./Header";
import Menu from "./Menu";
import About from "./About";
import Welcome from "./Welcome";

const App: FC = () => {
  return (
    <div className={s.app} style={{ height: "400vh" }}>
      <GlobalStyles />
      <Menu />
      <Header />
      <SContainer>
        <Welcome />
        <About />
      </SContainer>
    </div>
  );
};

export default App;
