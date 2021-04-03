import React from "react";
import { useSelector } from "react-redux";

import { selectStock, selectStockLoading } from "./stocksSlice";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loader: { textAlign: "center", padding: "7rem" },
  table: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
    },
  },
  tableRowCell: {
    padding: "0.5rem",
    whitepace: "nowrap",
    maxWidth: "4rem",
    overflow: "hidden",
    border: "none",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "0.1rem",
    },
  },
}));
const StockDetail = () => {
  const stock = useSelector(selectStock);

  const stockLoading = useSelector(selectStockLoading);
  return (
    <>
      {stockLoading === false &&
      typeof stock === "object" &&
      stock !== null &&
      Object.keys(stock).length > 0 ? (
        <Grid container style={{ margin: "2rem" }}>
          <Grid container style={{ marginBottom: "2rem" }}>
            <Typography variant="h2">{stock.name}</Typography>
          </Grid>
          <Grid container direction="column" sm>
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <Typography>Market Cap</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.marketCap}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography>Current Price</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.currentPrice}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography>Debt to equity</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.debtToEquity}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="column" sm>
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <Typography>ROCE</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.roce}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography>Stock P/E</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.stockPE}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography>Dividend Yield</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.dividendYield}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="column" sm>
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <Typography>ROE</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.roe}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography>Debt</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.debt}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Typography>EPS</Typography>
              </Grid>
              <Grid item>
                <Typography>{stock.eps}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};

export default StockDetail;
