import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import Logo from "./Logo";

const FarmCard = () => {
  return (
    <Paper
      component={Box}
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="0.75rem"
      px="1.5rem"
      my="1rem"
    >
      <Box display="flex" justify="center" alignItems="center">
        <Box width={60}>
          <Logo width={34} style={{ maxWidth: `100%` }} />
        </Box>
        <Typography variant="body1">DOP</Typography>
      </Box>
      <Box
        display="flex"
        justify="center"
        flexDirection="column"
        alignItems="center"
        lineHeight="2rem"
      >
        <span class="brick">‌&zwnj;</span>
        <Typography variant="body1">
          <Box color="success.main" lineHeight="2rem">
            %
          </Box>
        </Typography>
        <Typography variant="body1">APR</Typography>
      </Box>
    </Paper>
  );
};

export default FarmCard;
