import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as BSCIcon } from "../../images/bsc-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as TelegramIcon } from "../../images/telegram-icon.svg";
import { ReactComponent as CoinGeckoIcon } from "../../images/coin-gecko-icon.svg";
import { ReactComponent as CoinMarketCapIcon } from "../../images/coin-maket-cap-icon.svg";
import { ReactComponent as AnnouncementIcon } from "../../images/announcement-icon.svg";
import { usePadding } from "../../hooks/hooks";

const Footer = () => {
  const { pt } = usePadding(1);
  const { pb } = usePadding(1.5);
  return (
    <footer className={`${pt} ${pb}`}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <BSCIcon width={30} />{" "}
            <Typography variant="body1">
              <Box mx="0.5rem">Binance Smart Chain</Box>
            </Typography>
          </Box>
          <Box display="flex" className="gap" alignItems="center">
            <a href="#">
              <GithubIcon style={{maxWidth: `100%`}} width={38} />{" "}
            </a>
            <a href="#">
              <CoinGeckoIcon style={{maxWidth: `100%`}} width={38} />{" "}
            </a>
            <a href="#">
              <CoinMarketCapIcon style={{maxWidth: `100%`}} width={38} />{" "}
            </a>
            <a href="#">
              <AnnouncementIcon style={{maxWidth: `100%`}} width={38} />{" "}
            </a>
            <a href="#">
              <TelegramIcon style={{maxWidth: `100%`}} width={38} />{" "}
            </a>
            <a href="#">
              <TwitterIcon style={{maxWidth: `100%`}} width={38} />{" "}
            </a>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
