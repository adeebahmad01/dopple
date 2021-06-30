import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useMargin, usePadding } from "../../hooks/hooks";
import { GradientButton } from "../utils/StyledButton";
import Logo from "../utils/Logo";
const useStyles = makeStyles((theme) => ({
  fos: {
    fontSize: theme.typography.body1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const { ml } = useMargin(1);
  const { py } = usePadding(1.25);
  return (
    <header>
      <Container
        component={Box}
        style={{ display: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        className={py}
        maxWidth="lg"
      >
        <Box display="flex" justify="center" alignItems="center">
          <Logo width={64} />
          <Typography className={ml} component={Box} ml={2} variant="h2">
            Dopple Finance
          </Typography>
        </Box>
        <Box display="flex">
          <GradientButton className={classes.fos}>Launch App</GradientButton>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
