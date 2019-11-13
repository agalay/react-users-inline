import React from "react";
import { Section, Header } from "./components";
import { CardList } from "./containers";

import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Section>
        <CardList />
      </Section>
    </div>
  );
}

export default App;
