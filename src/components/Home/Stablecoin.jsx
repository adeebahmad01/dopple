import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { useMargin, usePadding } from "../../hooks/hooks";
import { Button, TextButton } from "../utils/StyledButton";

const Stablecoin = () => {
  const { py } = usePadding(7);
  const { mb } = usePadding(2);
  const { my } = useMargin(1.5);
  return (
    <section>
      <div className={`${py} ${mb}`}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
              <Typography variant="h1">
                <Typography variant="h1" color="primary" component="span">
                  Stablecoin
                </Typography>{" "}
                DeFi Ecosystem on BSC
              </Typography>
              <Typography className={my} color="textSecondary">
                Swap your stablecoins at the best rate. Stake your stablecoins
                to earn high yield.
              </Typography>
              <Box className={my}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className="gap"
                >
                  <Button color="primary" variant="contained">
                    Launch App
                  </Button>
                  <TextButton color="primary" variant="text">
                    Buy Dopple
                  </TextButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default Stablecoin;
