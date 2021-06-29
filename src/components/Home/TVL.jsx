import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoCard from "../utils/InfoCard";
import { ReactComponent as TvlDark } from "../../images/tvl-dark-icon.svg";
import { ReactComponent as TradingDark } from "../../images/trading-dark-icon.svg";
import { ReactComponent as MarketCapDark } from "../../images/market-cap-dark-icon.svg";

const TVL = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={4} xs={12}>
            <InfoCard value="$49M" Icon={<TvlDark width={36} />}>
              Total Value Locked
            </InfoCard>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InfoCard value="$1026M" Icon={<TradingDark width={36} />}>
              Total Trading Volume
            </InfoCard>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InfoCard value="$11M" Icon={<MarketCapDark width={36} />}>
              DOP Market Cap
            </InfoCard>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TVL;
