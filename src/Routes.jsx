import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Stake from "./components/Stake";
const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));
const Routes = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageWrapper}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/stake" component={Stake} exact />
      </Switch>
    </div>
  );
};

export default Routes;
