import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useMargin } from "../../hooks/hooks";
import FarmCard from "../utils/FarmCard";
import { Button, GradientButton } from "../utils/StyledButton";

const Farm = () => {
  const { mt } = useMargin(2.5);
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
            xs={12}
          >
            <div style={{ width: `100%` }}>
              <FarmCard />
              <FarmCard />
              <FarmCard />
              <FarmCard />
            </div>
            <Box textAlign="center" className={mt}>
              <Button variant="contained" color="primary">
                View More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Farm;
