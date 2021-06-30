import { Container, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(window.innerWidth > 1250);
  }, []);
  return (
    <div className="outer_stake">
      <Header setOpen={setOpen} />
      <Nav open={open} />
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
