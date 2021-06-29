import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import FarmCard from "../utils/FarmCard";
import { GradientButton } from "../utils/StyledButton";

const Farm = () => {
  return (
    <Box component="section" mt="3rem">
      <Container component={Box} py="2.5rem" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            component={Box}
            display="flex"
            justifyContent="center"
            alignItems="center"
            px="1rem"
            lg={6}
          >
            <Box px="1rem">
              <Typography variant="h3" color="primary">
                Farm
              </Typography>
              <Typography
                component={Box}
                py="1rem"
                variant="h3"
                color="textPrimary"
              >
                Earn high yield on your stablecoins and liquidity
              </Typography>
              <Typography
                variant="body1"
                style={{ lineHeight: `2rem` }}
                color="textSecondary"
              >
                Liquidity Providers earn fees in stablecoin currency for every
                swap made through the underlying liquidity pools. Liquidity
                Providers also receive LP tokens, which can be staked to earn
                high yields.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            lg={6}
          >
            <div style={{ width: `100%` }}>
              <FarmCard />
              <FarmCard />
              <FarmCard />
              <FarmCard />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Farm;
