import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useMargin, usePadding } from "../../hooks/hooks";
import { GradientButton, TextButton } from "../utils/StyledButton";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import Logo from "../utils/Logo";
const useStyles = makeStyles((theme) => ({
  fos: {
    fontSize: theme.typography.body1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const { ml } = useMargin(1);
  const { mx } = useMargin(0.5);
  const { py } = usePadding(1.25);
  const { p } = usePadding(0.5);
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
        <Box>
          <TextButton
            variant="text"
            style={{ minWidth: `0` }}
            className={`${p} ${mx}`}
          >
            <Brightness2OutlinedIcon
              style={{ transform: `rotate(135deg)` }}
              fontSize="1.5rem"
            />
          </TextButton>
          <GradientButton className={classes.fos}>Launch App</GradientButton>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
