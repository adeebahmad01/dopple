import { Container } from "@material-ui/core";
import React from "react";
import img1 from "../../images/beginner-apeboard-image.png";
import img2 from "../../images/beginner-arken-image.png";
import img3 from "../../images/beginner-twindex-image.png";

const NoobTools = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 dark:text-white">
        <div className="beginner-card px-4 mb-8">
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
              <img
                src={img1}
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
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="text-center font-bold">Buy DOP</div>
          </a>
        </div>
        <div className="beginner-card px-4 mb-8">
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
              <img
                src={img2}
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
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="text-center font-bold">View Your Portfolio</div>
          </a>
        </div>
        <div className="beginner-card transform mb-8 px-4">
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
              <img
                src={img3}
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
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="text-center font-bold">View DOP Chart</div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default NoobTools;
