import { Container, Paper } from "@material-ui/core";
import React from "react";

const YourDopple = () => {
  return (
    <Container>
      <Paper className=" dark:bg-dark-700 rounded-3xl shadow-md p-6 lg:p-12 mb-6">
        <div className="grid grid-cols-2 gap-3 py-2">
          <div className="grid grid-cols-8 py-8 sm:py-0 col-span-2 sm:col-span-1  items-center rounded-3xl bg-gradient-to-r from-blue-400 to-green-300 justify-between">
            <div className="col-span-5 pl-5 sm:pl-6 ">
              <div className="text-xl font-bold text-white mb-3">
                Dopple earned :
              </div>
              <div className="text-4xl font-bold text-white mb-2">0.00</div>
              <div className="text-sm font-bold text-white">≈ $0.00</div>
            </div>
            <div className="col-span-3 px-2 pr-6"></div>
          </div>
          <div className="dark:text-white col-span-2 sm:col-span-1 rounded-3xl py-8 sm:py-6 px-3 sm:px-8 font-bold">
            <div className="grid grid-cols-12">
              <div className="col-span-1"></div>
              <div className="sm:text-lg text-md ml-2 col-span-11 flex sm:block items-center ">
                <div className="inline sm:block">Your DOPPLE&nbsp;</div>
                <div className="inline sm:block">wallet balance :</div>
              </div>
              <div className="col-span-1" />
              <div className="ml-2 col-span-11">
                <div className="text-4xl mt-4 mb-2 font-bold text-blue-500">
                  0.00
                </div>
                <div className="text-sm mb-4 ">≈ $0.00</div>
              </div>
              <div className="col-span-1"></div>
              <div className="ml-2 col-span-11 ">
                <div className="sm:text-lg text-md  flex items-center  py-1 sm:py-0">
                  <div className="sm:flex">Total Value Locked :&nbsp;</div>
                </div>
                <div className>
                  <div className="text-4xl my-4 font-bold text-blue-500">
                    48,562,795.57
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default YourDopple;
