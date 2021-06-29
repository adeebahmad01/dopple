import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import { usePadding } from "../../hooks/hooks";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Roadmap() {
  const classes = useStyles();
  const { pb, pt } = usePadding(5);
  const { pb: containerPaddingBottom } = usePadding(2.5);
  return (
    <section className={pt}>
      <Container className={containerPaddingBottom} maxWidth="lg">
        <Box textAlign="center">
          <Typography className={pb} variant="h2">
            Roadmap
          </Typography>
        </Box>
        <Timeline align={window.innerWidth > 640 ? "alternate" : "left"}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator style={{ position: `relative` }}>
              <TimelineDot color="primary">
                <Box width="1rem" height="1rem"></Box>
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Box mx={"1rem"}>
                <Paper style={{ padding: 0 }} className={classes.paper}>
                  <Box p="2rem" textAlign="left">
                    <Typography color="primary" variant="h5" component="h1">
                      Q1 - 25 March 2021
                    </Typography>
                    <Box my="0.5rem">
                      {[
                        "✔ Launch of Dopple Finance",
                        "✔ Fair Launch of Dopple Token",
                        "✔ Staking Pools for BUSD. USDT, DAI, USDC",
                        "✔ Staking Pool for DOP",
                      ].map((el) => (
                        <Typography key={el} variant="body2">
                          <Box mb="0.5rem">{el}</Box>
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator style={{ position: `relative` }}>
              <TimelineDot color="primary">
                <Box width="1rem" height="1rem"></Box>
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Box mx={"1rem"}>
                <Paper style={{ padding: 0 }} className={classes.paper}>
                  <Box p="2rem">
                    <Typography color="primary" variant="h5" component="h1">
                      Q2 2021
                    </Typography>
                    <Box my="0.5rem">
                      {[
                        "✔ Launch of UST pool",
                        "✔ List on Coingecko & CoinMarketCap",
                        "✔ Asset-Backed Stablecoin $DOLLY",
                        "✔ UI Updates & Dark Mode",
                        "✔ Smart Contract Audit by CertiK",
                        "✔ Synthetic Stock Market - Twindex.com - The first Synthetic Stock Exchange on BSC",
                        "✔ CEX Listings",
                        "- Partner with lending platforms to use DOP/DOLLY as collateral",
                        "- Provide ability to add liquidity to pools directly on our platform",
                        "- Integrations with liquidity aggregators",
                      ].map((el) => (
                        <Typography key={el} variant="body2">
                          <Box mb="0.5rem">{el}</Box>
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator style={{ position: `relative` }}>
              <TimelineDot color="primary">
                <Box width="1rem" height="1rem"></Box>
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Box mx={"1rem"}>
                <Paper className={classes.paper}>
                  <Box p="2rem" textAlign="left">
                    <Typography color="primary" variant="h5" component="h1">
                      Q3 2021
                    </Typography>
                    <Box my="0.5rem">
                      {[
                        "- Auto-Compounding",
                        "- Launching additional pools",
                        "- User Dashboard",
                        "- Partner with protocols to adopt DOLLY",
                        "- Add support for additional web and mobile wallets",
                        "- Additional Audits",
                      ].map((el) => (
                        <Typography key={el} variant="body2">
                          <Box mb="0.5rem">{el}</Box>
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator style={{ position: `relative` }}>
              <TimelineDot color="primary">
                <Box width="1rem" height="1rem"></Box>
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Box mx={"1rem"}>
                <Paper className={classes.paper}>
                  <Box p="2rem" textAlign="left">
                    <Typography color="primary" variant="h5" component="h1">
                      Q4 2021
                    </Typography>
                    <Box my="0.5rem">
                      {[
                        "- Hyper-Chain on Ethereum fork network",
                        "- Dopple Wallet",
                      ].map((el) => (
                        <Typography key={el} variant="body2">
                          <Box mb="0.5rem">{el}</Box>
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
        </Timeline>
      </Container>
    </section>
  );
}
