import React, { FC, useState } from "react";
import s from "../styles/scss/app.module.scss";
import { GlobalStyles, SContainer } from "../styles/components";
import { Header } from "./Header";
import Menu from "./Menu";
import About from "./About";
import Welcome from "./Welcome";
import Contacts from "./Contacts";
import Skills from "./Skills";

const App: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div
      className={s.app}
      style={{
        overflowY: isMenuOpen ? "hidden" : "initial",
      }}
    >
      <GlobalStyles />
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <Header />
      <SContainer>
        <Welcome />
        <About />
        <Skills />
        <Contacts />
      </SContainer>
    </div>
  );
};

export default App;
