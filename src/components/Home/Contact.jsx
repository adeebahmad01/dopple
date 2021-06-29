import {
  Box,
  CardActionArea,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useMargin, usePadding } from "../../hooks/hooks";
import ContactCard from "../utils/ContactCard";
import Logo from "../utils/Logo";
import { Button } from "../utils/StyledButton";
import { ReactComponent as TwitterIcon } from "../../images/blue-twitter-icon.svg";
import { ReactComponent as TelegramIcon } from "../../images/blue-telegram-icon.svg";
const useStyles = makeStyles((theme) => ({
  gradient: {
    backgroundImage: `linear-gradient(to right,${theme.palette.primary.main},${theme.palette.secondary.main})`,
  },
  button: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 300,
  },
}));

const Contact = () => {
  const { p } = usePadding(3.5);
  const { py, pt } = usePadding(2);

  const { my } = useMargin(4);
  const { mt } = useMargin(1);
  const { mb } = useMargin(3);
  const classes = useStyles();
  return (
    <section className={pt}>
      <Container className={py} maxWidth="lg">
        <Box textAlign="center" className={`${p} ${classes.gradient}`}>
          <Box>
            <Logo width={120} />
          </Box>
          <Box my={`2rem`}>
            <Typography variant="h4">
              Get the most out of your stablecoins
            </Typography>
          </Box>
          <Box>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
            >
              Launch App
            </Button>
          </Box>
        </Box>
        <Box textAlign="center">
          <Typography className={my} variant="h1">
            Join Our Community
          </Typography>
          <Grid className={`${mt} ${mb}`} container spacing={2}>
            <Grid item lg={6} xs={12}>
              <ContactCard
                Icon={TwitterIcon}
                href="#"
                name="Twitter"
                subtitle="Dopple Finance #BSC"
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <ContactCard
                Icon={TelegramIcon}
                href="#"
                name="Telegram"
                subtitle="Dopple Finance Community"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;
