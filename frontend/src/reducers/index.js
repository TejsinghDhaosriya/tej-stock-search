import { combineReducers } from "redux";

import snackbarReducer from "./snackbar";
import stocksReducer from "../components/stock/stocksSlice";
const createRootReducer = () =>
  combineReducers({
    snackbar: snackbarReducer,
    stocks: stocksReducer,
  });

export default createRootReducer;
