import { Box, CardActionArea, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useMargin } from "../../hooks/hooks";

const ContactCard = ({ Icon, href, name, subtitle }) => {
  const { my } = useMargin();
  return (
    <Paper style={{ padding: 0, overflow: `hidden` }}>
      <CardActionArea component="a" href={href}>
        <Box textAlign="center" py="3rem" px="1.5rem">
          <Box>
            <Icon width={80} />
          </Box>
          <Box>
            <Typography className={my} variant="h6">
              {name}
            </Typography>
            <Typography>{subtitle}</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Paper>
  );
};

export default ContactCard;
