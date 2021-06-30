import { Container } from "@material-ui/core";
import React from "react";
import img1 from "../../images/beginner-apeboard-image.png";
import img2 from "../../images/beginner-arken-image.png";
import img3 from "../../images/beginner-twindex-image.png";

const NoobTools = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 mb-12 dark:text-white">
        <div className="beginner-card px-4">
          <a
            target="_blank"
            href="https://twindex.com/#/swap?outputCurrency=0x844fa82f1e54824655470970f7004dd90546bb28"
          >
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
                  src={img1}
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
                src={img1}
                decoding="async"
                style={{
                  visibility: "inherit",
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
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="text-center -mt-8 font-bold">Buy DOP</div>
          </a>
        </div>
        <div className="beginner-card px-4">
          <a
            target="_blank"
            href="https://apeboard.finance/dashboard/null?chain=BSC"
          >
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
                  src={img2}
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
                src={img2}
                decoding="async"
                style={{
                  visibility: "inherit",
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
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="text-center -mt-8 font-bold">
              View Your Portfolio
            </div>
          </a>
        </div>
        <div className="beginner-card transform px-4">
          <a
            target="_blank"
            href="https://swap.arken.finance/#/tokens/bsc_twindex_0x844fa82f1e54824655470970f7004dd90546bb28_0xe9e7cea3dedca5984780bafc599bd69add087d56"
          >
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
                  src={img3}
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
                src={img3}
                decoding="async"
                style={{
                  visibility: "inherit",
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
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="text-center -mt-8 font-bold">View DOP Chart</div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default NoobTools;
