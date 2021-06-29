import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
const InfoCard = ({ children, value, Icon }) => {
  return (
    <Paper
      p="1.5rem"
      component={Box}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Typography variant="body2">{children}</Typography>
        <Typography variant="h1" color="primary">
          {value}
        </Typography>
      </Box>
      <Box>{Icon}</Box>
    </Paper>
  );
};

export default InfoCard;
