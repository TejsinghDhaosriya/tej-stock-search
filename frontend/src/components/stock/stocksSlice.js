import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    stocks: [],
    stocksLoading: true,
    stock: {},
    stockLoading: false,
  },
  reducers: {
    setStocks: (state, action) => {      
      state.stocks = action.payload;
    },
    setStocksLoading: (state, action) => {
      state.stocksLoading = !!action.payload;
    },
    setStock: (state, action) => {
      state.stock = action.payload;
    },
    setStockLoading: (state, action) => {
      state.stockLoading = !!action.payload;
    },
    
  },
});
export const {
  setStock,
  setStocks,
  setStockLoading,
  setStocksLoading,
} = stocksSlice.actions;

export const selectStocks = (state) => get(state, "stocks.stocks");
export const selectStocksLoading = (state) => get(state, "stocks.stocksLoading");
export const selectStock = (state) => get(state, "stocks.stock");
export const selectStockLoading = (state) => get(state, "stocks.stockLoading");

export default stocksSlice.reducer;
