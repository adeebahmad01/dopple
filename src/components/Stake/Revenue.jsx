import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import img from "../../images/diamond-hands-dark.png";

const Revenue = () => {
  return (
    <section>
      <Container component={Box} p="1rem" maxWidth="lg">
        <div className="grid sm:grid-cols-2">
          <div className="sm:hidden block">
            <div className="col-span-1 dark:flex hidden">
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
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt
                    aria-hidden="true"
                    role="presentation"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      margin: 0,
                      border: "none",
                      padding: 0,
                    }}
                  />
                </div>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
            <div className="col-span-1 dark:hidden flex">
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
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt
                    aria-hidden="true"
                    role="presentation"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      margin: 0,
                      border: "none",
                      padding: 0,
                    }}
                  />
                </div>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-4 sm:mt-0 -mt-20 relative sm:px-0 px-4">
            <div className="sm:text-xl text-normal font-bold dark:text-white">
              Diamond Hands Revenue
            </div>
            <div className="text-xs dark:text-white text-steel-400 mb-3 mt-3 sm:mb-6">
              <span className="dark:opacity-80">
                We use 70% of our fee revenues to buy back DOP and redistribute
                those to our most loyal holders through the Diamond Hands pools.{" "}
                <a
                  href="https://dopple.gitbook.io/dopple-finance/products/diamond-hands"
                  target="_blank"
                  className="text-blue-400 dark:text-blue-300 underline"
                >
                  Learn more
                </a>
              </span>
            </div>
            <div className="d-inline text-4xl sm:text-5xl text-blue-400 font-bold mt-2 sm:my-4">
              440,513.47 <span className="text-2xl">DOP</span>
            </div>
            <div className="text-xs mb-4 text-steel-300 dark:text-white mt-4 dark:opacity-80">
              Amount of DOP to be distributed
            </div>
            <div className="text-2xl sm:text-3xl text-blue-400 font-bold mt-2 sm:mt-5">
              <span className="sm:mr-3 mr-0">$</span>3,290.43
            </div>
            <div className="text-xs mb-4 text-steel-300 dark:text-white mt-4 dark:opacity-80">
              Value for the next buy back
            </div>
            <div className="sm:flex">
              <div className="flex items-center mr-3">
                <div className="text-normal dark:text-white font-bold mr-2 sm:mb-0 mb-2">
                  Next buy back in
                </div>
              </div>
              <div className="dark:text-white">
                <div className="w-full">
                  <div className="flex justify-between text-3xl  text-center">
                    <div className="w-16">3</div>
                    <div className="w-2 font-normal">:</div>
                    <div className="w-16">00</div>
                    <div className="w-2 font-normal">:</div>
                    <div className="w-16">20</div>
                  </div>
                  <div className="flex justify-between text-steel-300 text-sm text-center">
                    <div className="w-16">HR</div>
                    <div className="w-16">MIN</div>
                    <div className="w-16">SEC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:block">
            <div className="col-span-1 dark:flex">
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
                <img
                  src={img}
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
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Revenue;
