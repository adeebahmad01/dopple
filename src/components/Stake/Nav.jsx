import React from "react";

const Nav = () => {
  return (
    <nav>
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
            <a target="_blank" href="https://dopple.gitbook.io/dopple-finance/">
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
    </nav>
  );
};

export default Nav;
