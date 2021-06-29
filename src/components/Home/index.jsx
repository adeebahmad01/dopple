import React from "react";
import Farm from "./Farm";
import Header from "./Header";
import Protocol from "./Protocol";
import Roadmap from "./Roadmap";
import Stablecoin from "./Stablecoin";
import TVL from "./TVL";

const Home = () => {
  return (
    <div>
      <Header />
      <Stablecoin />
      <TVL />
      <Protocol />
      <Farm />
      <Roadmap />
    </div>
  );
};

export default Home;
