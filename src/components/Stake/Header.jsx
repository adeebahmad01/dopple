import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { usePadding } from "../../hooks/hooks";
import Logo from "../utils/Logo";
import { ReactComponent as LogoTransparent } from "../../images/logo_transparent.svg";
import { Link } from "react-router-dom";
const Header = ({ setOpen }) => {
  const { py } = usePadding(1.25);
  return (
    <header>
      <Container className={py} maxWidth="lg">
        <div className="py-3 pb-0 sm:pb-5 sm:py-5 sm:mb-2 flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center cursor-pointer">
              <div className="lg:flex">
                <div
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: 0,
                  }}
                >
                  <Logo
                    width={64}
                    decoding="async"
                    style={{
                      visibility: "inherit",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      minWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="lg:hidden flex">
                <div
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: 0,
                  }}
                >
                  <Logo
                    decoding="async"
                    style={{
                      visibility: "inherit",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      minWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="lg:text-4xl sm:text-2xl text-xl font-bold dark:text-white text-gray-700 ml-2 sm:ml-4">
                Dopple Finance
              </div>
            </div>
          </Link>
          <div className="mt-2 flex">
            <div className="sm:flex hidden justify-between">
              <a
                target="_blank"
                href="https://twindex.com/#/swap?outputCurrency=0x844fa82f1e54824655470970f7004dd90546bb28"
              >
                <div className="px-4 py-2 text-white flex items-center rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300 mr-2">
                  <div
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      position: "relative",
                      boxSizing: "border-box",
                      margin: 0,
                    }}
                  >
                    <LogoTransparent
                      decoding="async"
                      width={20}
                      style={{
                        visibility: "inherit",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        minWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
                  <div className="ml-2 text-sm">$0.1965</div>
                </div>
              </a>
              <div className="dark:bg-dark-700 dark:text-white bg-white flex items-center bg-steel-100 text-steel-400 rounded-lg p-1 pl-3">
                <div className="grid grid-cols-1">
                  <div className="text-steel-400 dark:text-white text-sm font-bold">
                    <span>0.00</span>
                    <span className="ml-1 mr-3">DOP</span>
                  </div>
                  <div className="text-xs text-blue-400">≈ $0.00</div>
                </div>
                <div>
                  <button
                    className="bg-white text-blue-500 active:bg-pink-600 font-bold uppercase text-xs px-3 pr-2 sm:pr-3 py-1 rounded outline-none focus:outline-none items-center justify-center flex dark:text-white dark:bg-dark-800"
                    type="button"
                  >
                    <div className="py-1">Connect Wallet</div>
                  </button>
                </div>
              </div>
            </div>
            <div
              onClick={() => setOpen((o) => !o)}
              className={`dark:bg-dark-700 dark:text-white mobile-menu-button w-10 sm:w-auto px-2 justify-center sm:px-2 py-2 items-center ml-4 bg-blue-200 rounded-lg cursor-pointer ${
                window.innerWidth > 1250 ? "hidden" : ""
              }`}
            >
              <svg
                role="img"
                className="octicon octicon-three-bars"
                viewBox="0 0 16 16"
                width={20}
                height={20}
                fill="currentColor"
                style={{
                  display: "inline-block",
                  userSelect: "none",
                  verticalAlign: "text-bottom",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex my-4 justify-between">
          <a
            target="_blank"
            href="https://twindex.com/#/swap?outputCurrency=0x844fa82f1e54824655470970f7004dd90546bb28"
          >
            <div className="px-4 py-2 text-white flex items-center rounded-lg shadow-sm bg-gradient-to-r from-blue-400 to-green-300 mr-2">
              <div
                style={{
                  display: "inline-block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxSizing: "border-box",
                  margin: 0,
                }}
              >
                <LogoTransparent
                  width={20}
                  decoding="async"
                  style={{
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    minWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <div className="ml-2 text-sm">$0.1965</div>
            </div>
          </a>
          <div className="bg-white flex items-center bg-steel-100 dark:text-white dark:bg-dark-700 text-steel-400 rounded-lg p-1 pl-3">
            <div className="grid grid-cols-1">
              <div className="text-steel-400 text-sm font-bold dark:text-white">
                <span>0.00</span>
                <span className="ml-1 mr-3">DOP</span>
              </div>
              <div className="text-xs text-blue-400">≈ $0.00</div>
            </div>
            <div>
              <button
                className="bg-white text-blue-500 active:bg-pink-600 font-bold uppercase text-xs px-3 pr-2 sm:pr-3 py-1 rounded outline-none focus:outline-none items-center justify-center flex dark:text-white dark:bg-dark-800"
                type="button"
              >
                <div className="py-1">Connect Wallet</div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
