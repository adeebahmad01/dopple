import { Collapse } from "@material-ui/core";
import React, { useState } from "react";

const CollapseRow = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="diamond-hand-header mt-5 text-sm sm:text-base dark:text-white border dark:border-0 rounded-xl px-2 sm:px-6 py-6 dark:border-dark-500">
      <div
        onClick={() => setOpen(!open)}
        className="grid grid-cols-5 cursor-pointer"
      >
        <div className="col-span-2 text-center flex items-center">
          <div className="sm:block hidden"></div>
          <div className="sm:hidden block"></div>
          <div className="ml-4">
            <div className="text-xs sm:text-lg text-left">
              DOP Token Holders
            </div>
            <div className="text-xs sm:text-sm text-blue-400 text-left">
              <a
                href="https://twindex.com/#/swap?outputCurrency=0x844fa82f1e54824655470970f7004dd90546bb28"
                target="_blank"
              >
                Buy DOP
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-center flex items-center justify-center">
          <div className="rounded-lg sm:rounded-xl text-white bg-pink-500 px-1 sm:px-2 ml-1 sm:px-3 sm:text-base text-xs py-2">
            30%
          </div>
        </div>
        <div className="col-span-1 text-center flex items-center justify-center">
          <div className>
            <div className="dark:text-white text-xs sm:text-lg">8,618,313</div>
            <div className="text-steel-300 text-xs sm:text-sm">DOP</div>
          </div>
        </div>
        <div className="col-span-1 text-center flex items-center justify-center">
          <div className>
            <div className>
              <div className="text-blue-400 text-xs sm:text-lg"> 0.00</div>
              <div className="text-steel-300 text-xs sm:text-sm">DOP</div>
            </div>
          </div>
        </div>
      </div>
      <Collapse in={open}>
        <div className=" card-toggle ">
          <div className="dark:bg-steel-500 py-3 sm:py-0 grid grid-cols-8  bg-gray-100 rounded-lg mt-4">
            <div className="col-span-full sm:col-span-3 sm:py-6 px-3 sm:pl-6 sm:pr-3 grid grid-cols-1 sm:gap-y-1">
              <div className="flex justify-between items-center">
                <div className="dark:text-white font-bold text-gray-500 text-md">
                  Stake
                </div>
                <div className="text-gray-400 text-xs sm:text-sm flex">
                  <div>Balance: </div>
                  <div className="ml-1 cursor-pointer text-blue-500">0</div>
                </div>
              </div>
              <div className>
                <input
                  type="number"
                  placeholder={0}
                  className="dark:bg-dark-400 dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3"
                  defaultValue={112}
                />
              </div>
              <div className="-mt-8 sm:-mt-10 pr-1">
                <button className="dark:bg-dark-500 focus:outline-none text-blue-400 bg-blue-100 px-5 py-1 rounded-md float-right relative z-1">
                  Max
                </button>
              </div>
              <div className="mt-1">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white "
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-center py-2 mt-1 w-full rounded-md font-bold  dark:text-dark-700 text-gray-400 dark:bg-dark-500 bg-steel-200"
                    disabled
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-full sm:col-span-3 py-4 sm:py-6 pl-3 pr-3 grid grid-cols-1 sm:gap-y-1">
              <div className="flex items-center justify-between">
                <div className="dark:text-white font-bold text-gray-500 text-md">
                  Unstake
                </div>
                <div className="text-gray-400 text-xs sm:text-sm flex">
                  <div>Balance: </div>
                  <div className="ml-1 cursor-pointer text-blue-500">0</div>
                </div>
              </div>
              <div className>
                <input
                  type="number"
                  placeholder={0}
                  className="dark:bg-dark-400 dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3"
                  defaultValue={133}
                />
              </div>
              <div className="-mt-8 sm:-mt-10 pr-1">
                <button className="dark:bg-dark-500 focus:outline-none text-blue-400 bg-blue-100 px-5 py-1 rounded-md float-right relative z-1">
                  Max
                </button>
              </div>
              <div className="mt-1">
                <button
                  type="button"
                  disabled
                  className="focus:outline-none text-center py-2 mt-1 w-full rounded-md font-bold dark:text-dark-700 text-gray-400 dark:bg-dark-500 bg-steel-200"
                >
                  Withdraw
                </button>
              </div>
            </div>
            <div className="col-span-full sm:col-span-2 text-center p-5 pl-3 grid grid-cols-1 gap-y-1">
              <div className="text-total-reward text-3xl font-bold text-blue-500 pt-4 flex justify-center items-center">
                0.00
              </div>
              <div className="dark:text-white text-xs mb-4">(≈ $0.00)</div>
              <button
                type="button"
                className="focus:outline-none text-center my-1 w-full py-3 sm:py-2 rounded-md bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold sm:mb-2"
                disabled
              >
                Claim
              </button>
            </div>
          </div>
          <div className="mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
            <span className="mr-1 text-center">
              A penalty fee of 1% will be applied when withdrawing your funds
              within 14 days after depositing into the Diamond Hands Pools.{" "}
              <br />
              Any following deposit extends the penalty period for another 14
              days.
            </span>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseRow;
