import React from "react";
import { ReactComponent as BSCIcon } from "../../images/bsc-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as TelegramIcon } from "../../images/telegram-icon.svg";
import { ReactComponent as CoinGeckoIcon } from "../../images/coin-gecko-icon.svg";
import { ReactComponent as CoinMarketCapIcon } from "../../images/coin-maket-cap-icon.svg";
import { ReactComponent as AnnouncementIcon } from "../../images/announcement-icon.svg";
import { ReactComponent as CheckIcon } from "../../images/check-icon.svg";
import { ReactComponent as CerticIcon } from "../../images/certik-icon.svg";
import { ReactComponent as ThaishieldIcon } from "../../images/thaishield-icon.svg";

const Footer = () => {
  return (
    <div className="container-fluid pt-4 px-2 sm:px-4">
      <div className="grid grid-cols-1 sm:flex justify-center sm:justify-between items-center pb-6 pt-4 gap-2">
        <div className="block sm:flex items-center justify-center">
          <div className="hidden sm:flex items-center justify-center">
            <BSCIcon width={30} />
            <span className="dark:text-white ml-1 mr-3 text-steel-400 text-sm sm:text-sm">
              Binance Smart Chain
            </span>
          </div>
          <div className="flex items-center justify-center sm:mb-0 mb-4">
            <CheckIcon width={20} />
            <span className="dark:text-white text-steel-400 text-sm sm:text-sm">
              Audited by
            </span>
          </div>
          <div className="ml-4 flex items-center justify-center sm:mb-0 mb-4">
            <a
              target="_blank"
              href="https://www.certik.org/projects/dopplefinance"
            >
              <CerticIcon />
            </a>
          </div>
          <div className="ml-4 flex items-center justify-center sm:mb-0 mb-6">
            <ThaishieldIcon />
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            target="_blank"
            href="https://github.com/DoppleFinance/dopple-contract"
          >
            <GithubIcon width={38} style={{ maxWidth: `100%` }} />
          </a>
          <a
            target="_blank"
            href="https://www.coingecko.com/en/coins/dopple-finance"
          >
            <CoinGeckoIcon width={38} style={{ maxWidth: `100%` }} />
          </a>
          <a
            target="_blank"
            href="https://coinmarketcap.com/en/currencies/dopple-finance/"
          >
            <CoinMarketCapIcon width={38} style={{ maxWidth: `100%` }} />
          </a>
          <a target="_blank" href="https://t.me/dopplefiAnn">
            <AnnouncementIcon width={38} style={{ maxWidth: `100%` }} />
          </a>
          <a target="_blank" href="https://t.me/dopplefi">
            <TelegramIcon width={38} style={{ maxWidth: `100%` }} />
          </a>
          <a target="_blank" href="https://twitter.com/dopplefi">
            <TwitterIcon width={38} style={{ maxWidth: `100%` }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
