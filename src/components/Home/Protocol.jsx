import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as Banner } from "../../images/banner.svg";
import { GradientButton } from "../utils/StyledButton";
const Protocol = () => {
  return (
    <Box component="section" mt="3rem">
      <Container component={Box} py="2.5rem" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Box p="2rem">
              <Banner width="100%" />
            </Box>
          </Grid>
          <Grid
            item
            component={Box}
            py="0.5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px="1rem"
            lg={6}
          >
            <div>
              <Typography variant="h3" color="primary">
                Protocol
              </Typography>
              <Typography
                component={Box}
                py="1rem"
                variant="h3"
                color="textPrimary"
              >
                Stablecoin Swap Algorithm
              </Typography>
              <Typography
                variant="body1"
                style={{ lineHeight: `2rem` }}
                color="textSecondary"
              >
                Designed for efficiently trading stablecoins and pegged assets
                on the Binance Smart Chain.
              </Typography>
              <Box mt="1.25rem">
                <GradientButton color="primary" variant="contained">
                  Launch Swap
                </GradientButton>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Protocol;
