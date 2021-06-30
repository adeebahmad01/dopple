import { Container, Paper } from "@material-ui/core";
import React from "react";
import CollapseStakkingRow from "../utils/CollapseStakkingRow";

const StakkingDopple = ({ heading }) => {
  return (
    <Container>
      <Paper className="dark:bg-dark-700 bg-white rounded-3xl shadow-md py-6 lg:pt-6 mb-6">
        <div>
          <div className="text-base sm:text-2xl font-bold dark:text-white ml-4 sm:ml-6 mb-4 ">
            <div className="flex items-center">{heading}</div>
          </div>
          <div className="text-sm sm:text-base dark:border-0 border-t grid grid-cols-5 dark:text-white dark:border-t-dark-500 py-4 ">
            <div className="col-span-2 text-center sm:text-left sm:ml-6 ">
              LP Tokens Name
            </div>
            <div className="col-span-1 text-center">APR</div>
            <div className="col-span-1 text-center">TVL</div>
            <div className="col-span-1 text-center">Earned</div>
          </div>
          <CollapseStakkingRow />
          <CollapseStakkingRow />
          <CollapseStakkingRow />
          <CollapseStakkingRow />
        </div>
      </Paper>
    </Container>
  );
};

export default StakkingDopple;
