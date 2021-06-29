import { Button as Btn, withStyles } from "@material-ui/core";

const GradientButton = withStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to right,${theme.palette.primary.main},${theme.palette.secondary.main})`,
    paddingLeft: `2rem`,
    paddingRight: `2rem`,
    paddingTop: `0.5rem`,
    paddingBottom: `0.5rem`,
  },
}))(Btn);

const Button = withStyles((theme) => ({
  root: {
    paddingLeft: `2rem`,
    paddingRight: `2rem`,
    paddingTop: `0.5rem`,
    paddingBottom: `0.5rem`,
  },
}))(Btn);
const TextButton = withStyles((theme) => ({
  root: {
    paddingLeft: `2rem`,
    paddingRight: `2rem`,
    paddingTop: `0.5rem`,
    paddingBottom: `0.5rem`,
    background: (props) => {
      console.log(props);
      return props.variant === "text" ? theme.palette.background.paper : "";
    },
  },
}))(Btn);

export { GradientButton, Button, TextButton };
