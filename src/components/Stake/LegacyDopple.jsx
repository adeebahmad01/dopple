import { Container, Paper } from "@material-ui/core";
import React from "react";
import CollapseStakkingRow from "../utils/CollapseStakkingRow";

const LegacyDopple = () => {
  return (
    <Container>
      <Paper className="dark:bg-dark-700 bg-white rounded-3xl shadow-md py-6 lg:pt-6 mb-6">
        <div className="text-base sm:text-2xl font-bold dark:text-white ml-4 sm:ml-6 mb-4">
          <div className="flex items-center">
            <span className>Legacy Staking DOPPLE</span>
            <span className="text-red-500 text-sm ml-2">(Pancake LP)</span>
          </div>
          <div className="text-xs text-red-300">
            <span className="text-red-500">After 25/05/2021 5AM (GMT+7)</span>,
            Emission Rates from Pancake will be decreased to 0x.
            <br />
            Please unstake and remove liquidity of all Pancake LPs. We will
            provide new LPs on Twindex.
          </div>
        </div>
        <div className="text-sm sm:text-base dark:border-0 border-t grid grid-cols-5 dark:text-white dark:border-t-dark-500 py-4 ">
          <div className="col-span-2 text-center sm:text-left sm:ml-6 ">
            LP Tokens Name
          </div>
          <div className="col-span-1 text-center">APR</div>
          <div className="col-span-1 text-center">TVL</div>
          <div className="col-span-1 text-center">Earned</div>
        </div>
        <CollapseStakkingRow legacyDopple />
        <CollapseStakkingRow legacyDopple />
        <CollapseStakkingRow legacyDopple />
      </Paper>
    </Container>
  );
};

export default LegacyDopple;
