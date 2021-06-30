import { Container, Paper } from "@material-ui/core";
import React from "react";
import CollapseRow from "../utils/CollapseRow";

const PoolTable = () => {
  return (
    <section>
      <Container>
        <Paper className="dark:bg-dark-700 bg-white rounded-3xl shadow-md py-6 lg:pt-6 mb-12 relative mt-6 ">
          <div className="px-0 sm:px-8">
            <div className="px-4 sm:px-6 text-xs sm:text-base grid grid-cols-5 dark:text-white py-2 pt-4">
              <div className="col-span-2 text-center">Pool</div>
              <div className="col-span-1 text-center">APR</div>
              <div className="col-span-1 text-center">TVL</div>
              <div className="col-span-1 text-center">Earnings</div>
            </div>
          </div>
          <div className="px-2 sm:px-8 mb-8">
            <CollapseRow />
            <CollapseRow />
            <CollapseRow />
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default PoolTable;
