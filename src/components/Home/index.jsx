import React from "react";
import Contact from "./Contact";
import Farm from "./Farm";
import Footer from "./Footer";
import Header from "./Header";
import Protocol from "./Protocol";
import Roadmap from "./Roadmap";
import Stablecoin from "./Stablecoin";
import TVL from "./TVL";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Stablecoin />
        <TVL />
        <Protocol />
        <Farm />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
