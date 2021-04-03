import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Stocks from "./components/stock/index";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { withTheme } from "./theme";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2), // Material UI spacing
    },
    position: "absolute",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper, // Makes it the same color as the paper color
    backgroundImage: `url(${"https://www.transparenttextures.com/patterns/cubes.png"})`,
  },
  mainContainer: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs")); // Anything size xs we return matches
  const { darkMode, setDarkMode } = props;

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems={matches ? "flex-start" : "center"}
    >
      <Grid item>
        <Typography variant="h2">RIAFY</Typography>
      </Grid>
      <Grid item className={classes.mainContainer}>
        <Stocks />
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label="Dark Mode"
        />
      </Grid>
    </Grid>
  );
}

export default withTheme(App);
