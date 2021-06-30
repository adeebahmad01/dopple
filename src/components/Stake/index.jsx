import { Container, Button } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LegacyDopple from "./LegacyDopple";
import Nav from "./Nav";
import NoobTools from "./NoobTools";
import PoolTable from "./PoolTable";
import Revenue from "./Revenue";
import StakkingDopple from "./StakkingDopple";
import YourDopple from "./YourDopple";

const Stake = () => {
  return (
    <div className="outer_stake">
      <Header />
      <Nav />
      <main className="outer_stake">
        <Revenue />
        <PoolTable />
        <YourDopple />
        <StakkingDopple
          heading={
            <>
              <span>Staking DOPPLE</span>
              <span className="text-blue-400 text-sm ml-2">(Twindex LP)</span>
            </>
          }
        />
        <StakkingDopple
          heading={
            <>
              <span>Staking Stablecoin</span>
            </>
          }
        />
        <LegacyDopple />
        <NoobTools />
      </main>
      <Footer />
    </div>
  );
};

export default Stake;
