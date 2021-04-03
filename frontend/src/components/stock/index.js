import React from "react";

import { useSelector} from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import StockSearch from "./StockSearch";
import StockDetail from "./StockDetail";
import { selectStockLoading } from "./stocksSlice";
const Stocks = () => {
  const stockLoading = useSelector(selectStockLoading);
  return (
    <Box p={2}>
      <Grid container direction="column">
        <Grid item>
          <StockSearch />
        </Grid>
        {stockLoading === false ? (
          <Grid item>
            <StockDetail />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Box>
  );
};

export default Stocks;
