import { Collapse } from "@material-ui/core";
import React, { useState } from "react";
import { usePopup } from "../Stake/PopupProvider";

const CollapseStakkingRow = ({ legacyDopple }) => {
  const { setOpen: setPopupOpen } = usePopup();
  const [open, setOpen] = useState(false);
  return (
    <div className="dark:bg-dark-700 dark:border-0 border-t relative dark:border-t-dark-500">
      <div
        onClick={() => setOpen(!open)}
        className="grid grid-cols-5  sm:gap-2 cursor-pointer"
      >
        <div className="flex col-span-2 py-2 sm:py-6 sm:px-4 justify-between items-center">
          <div className="text-xs flex items-center">
            <div className="flex mx-2 sm:mx-0 sm:mr-4"></div>
            <div className="text-xs sm:text-lg font-bold dark:text-white">
              <div>DOP-DOLLY LPs</div>
              <div className="font-light text-xs cursor_pointer text-blue-500 ">
                {legacyDopple ? (
                  <span className="text-red-400">
                    <a
                      target="_blank"
                      href="https://exchange.pancakeswap.finance/#/remove/0xff54da7caf3bc3d34664891fc8f3c9b6dea6c7a5/0x844FA82f1E54824655470970F7004Dd90546bB28"
                    >
                      Remove DOP-DOLLY LP
                    </a>
                  </span>
                ) : (
                  <a
                    target="_blank"
                    href="https://twindex.com/#/add/0x844FA82f1E54824655470970F7004Dd90546bB28/0xfF54da7CAF3BC3D34664891fC8f3c9B6DeA6c7A5"
                  >
                    Add DOP-DOLLY LP
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <div className="text-center text-xs px-2 sm:text-base dark:text-white font-bold py-1 rounded-lg text-black">
            APR <span className="sm:inline hidden">: </span>159%
            <div className="text-xs text-center text-steel-300">
              ≈ 0.44% daily
            </div>
          </div>
        </div>
        <div className="col-span-1 text-xs sm:text-base dark:text-white flex items-center justify-center">
          $2,777,519
        </div>
        <div className="text-blue-400 font-bold text-center sm:text-left text-xs sm:text-lg flex items-center justify-center">
          0.00
        </div>
      </div>
      <Collapse in={open}>
        <div className=" card-toggle">
          <div className="dark:bg-steel-500 py-3 sm:py-0 grid grid-cols-8 border-t dark:border-0 bg-gray-100 ">
            <div className="col-span-full sm:col-span-3 sm:py-6 px-3 sm:pl-6 sm:pr-3 grid grid-cols-1 sm:gap-y-1">
              <div className="flex justify-between items-center">
                <div className="dark:text-white font-bold text-gray-500 text-md">
                  Stake
                </div>
                <div className="text-gray-400 text-xs sm:text-sm flex">
                  <div>Balance: </div>
                  <div className="ml-1 cursor-pointer text-blue-500">0.00</div>
                </div>
              </div>
              <div className>
                <input
                  type="number"
                  placeholder={0}
                  className="dark:bg-dark-400 dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3"
                  readOnly
                  defaultValue
                />
              </div>
              <div className="-mt-10 pr-1">
                <button className="dark:bg-dark-500 focus:outline-none text-blue-400 bg-blue-100 px-5 py-1 rounded-md float-right relative z-1">
                  Max
                </button>
              </div>
              <div className="mt-1">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="focus:outline-none text-center py-2 mt-1 w-full border-0 rounded-md font-bold bg-blue-400 text-white"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-center py-2 mt-1 w-full bg-steel-200 rounded-md font-bold dark:text-dark-700 text-gray-400 dark:bg-dark-500"
                    disabled
                  >
                    Deposit
                  </button>
                </div>
              </div>
              <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                <span className="mr-1">You don’t have LP token yet? </span>
                <a
                  target="_blank"
                  href="https://twindex.com/#/add/0x844FA82f1E54824655470970F7004Dd90546bB28/0xfF54da7CAF3BC3D34664891fC8f3c9B6DeA6c7A5"
                >
                  <span className="text-blue-400">Add LP</span>
                </a>
              </div>
            </div>
            <div className="col-span-full sm:col-span-3 py-4 sm:py-6 pl-3 pr-3 grid grid-cols-1 sm:gap-y-1">
              <div className="flex items-center justify-between">
                <div className="dark:text-white font-bold text-gray-500 text-md">
                  Unstake
                </div>
                <div className="text-gray-400 text-xs sm:text-sm flex">
                  <div>Balance: </div>
                  <div className="ml-1 cursor-pointer text-blue-500">0.00</div>
                </div>
              </div>
              <div className>
                <input
                  type="number"
                  placeholder={0}
                  className="dark:bg-dark-400  dark:text-white focus:outline-none focus:ring focus:border-blue-200 rounded-md p-2 w-full mb-1 sm:mb-0 sm:my-3"
                  defaultValue
                />
              </div>
              <div className="-mt-10 pr-1">
                <button className="dark:bg-dark-500 focus:outline-none text-blue-400 bg-blue-100 px-5 py-1 rounded-md float-right relative z-1">
                  Max
                </button>
              </div>
              <div className="mt-1">
                <button
                  type="button"
                  className="focus:outline-none text-center py-2 mt-1 w-full rounded-md font-bold dark:text-dark-700 text-gray-400 dark:bg-dark-500 bg-steel-200"
                  disabled
                >
                  Withdraw
                </button>
              </div>
              <div className=" mt-4 text-xs dark:text-gray-400 flex items-center justify-center">
                <span className="mr-1">You want remove LP token? </span>
                <a
                  target="_blank"
                  href="https://twindex.com/#/remove/0x844FA82f1E54824655470970F7004Dd90546bB28/0xfF54da7CAF3BC3D34664891fC8f3c9B6DeA6c7A5"
                >
                  <span className="text-blue-400">Remove LP</span>
                </a>
              </div>
            </div>
            <div className="col-span-full sm:col-span-2 text-center p-5 pl-3 grid grid-cols-1 gap-y-1">
              <div className="text-total-reward text-3xl font-bold text-blue-500 pt-4 flex justify-center items-center">
                0.00
              </div>
              <div className="dark:text-white text-xs mb-4">(≈ $0.00)</div>
              <button
                type="button"
                onClick={() => setPopupOpen(true)}
                className="focus:outline-none text-center my-1  w-full py-3 sm:py-2 rounded-md bg-gradient-to-r from-blue-400 to-green-300 text-white font-bold sm:mb-10"
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseStakkingRow;
