import { Collapse } from "@material-ui/core";
import React from "react";

const Nav = ({ open }) => {
  return (
    <nav>
      {window.innerWidth < 1250 ? (
        <Collapse in={open}>
          <div className="active mobile-menu z-40 relative ">
            <div className="container pb-4 pt-2 px-4">
              <div className="grid grid-cols-1 text-2xl gap-y-4">
                <div>
                  <a href="/Swap">Swap</a>
                </div>
                <div>
                  <a href="/Deposit">Deposit</a>
                </div>
                <div>
                  <a href="/Withdraw">Withdraw</a>
                </div>
                <div>
                  <a href="/Dolly">Dolly</a>
                </div>
                <div>
                  <a href="/Stake">Farm</a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://dopple.gitbook.io/dopple-finance/"
                  >
                    Docs
                  </a>
                </div>
                <div>
                  <a href="/Info">Info</a>
                </div>
                <div>
                  <a target="_blank" href="https://twindex.com/">
                    Twindex
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      ) : (
        <aside className="transform flex top-44 left-0 w-60 bg-transparent fixed h-full z-30 ">
          <div className="mx-auto">
            <ul className="unstyled text-2xl dark:text-white text-gray-700">
              <a href="/Swap">
                <li className="false font-bold py-2 ">Swap</li>
              </a>
              <a href="/Deposit">
                <li className="false font-bold py-2 ">Deposit</li>
              </a>
              <a href="/Withdraw">
                <li className="false font-bold py-2 ">Withdraw</li>
              </a>
              <a href="/Dolly">
                <li className="false font-bold py-2 ">Dolly</li>
              </a>
              <a href="/Stake">
                <li className="text-blue-400 font-bold py-2 ">Farm</li>
              </a>
              <a
                target="_blank"
                href="https://dopple.gitbook.io/dopple-finance/"
              >
                <li className="font-bold py-2 ">Docs</li>
              </a>
              <a href="/Info">
                <li className="false font-bold py-2 ">Info</li>
              </a>
              <a target="_blank" href="https://twindex.com/">
                <li className="font-bold py-2 ">Twindex</li>
              </a>
            </ul>
          </div>
        </aside>
      )}
    </nav>
  );
};

export default Nav;
