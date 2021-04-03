import { put, call, select } from "redux-saga/effects";
import { get } from "lodash";
import { v4 as uuid } from "uuid";
import { enqueueSnackbar } from "../../../actions/snackbar";
import {
  getStocksListing,
  getStocksDetail,
} from "../api";
import {
  setStocksLoading,
  setStocks,
  setStockLoading,
  setStock,
} from "../stocksSlice";
import { stocksListing } from "../actions";

export function* stocksListingSaga(params) {
  try {
    yield put(setStocksLoading(true));
    const fetchedStocks = yield call(getStocksListing, params.data);
    yield put(setStocks(fetchedStocks.data));
    yield put(setStocksLoading(false));
  } catch (err) {
    yield put(setStocksLoading(false));
    yield put(
      enqueueSnackbar({
        message: "Stocks Fetch Failed!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }
}
export function* stocksDetailSaga(params) {
  try {
    yield put(setStockLoading(true));
    const fetchedStock = yield call(getStocksDetail,params.data);
    console.log('fetch',fetchedStock)
    yield put(setStock(fetchedStock.data));
    yield put(setStockLoading(false));
  } catch (err) {
    yield put(setStockLoading(false));
    yield put(
      enqueueSnackbar({
        message: "Stocks Fetch Failed!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }
}
