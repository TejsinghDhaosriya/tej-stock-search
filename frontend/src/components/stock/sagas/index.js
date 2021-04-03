import { takeEvery } from "redux-saga/effects";
import { SAGA_FETCH_STOCKS, SAGA_FETCH_STOCK} from "../actions";
import { stocksListingSaga, stocksDetailSaga} from "./sagas";

export const stocksSagas = [
  takeEvery(SAGA_FETCH_STOCKS, stocksListingSaga),
  takeEvery(SAGA_FETCH_STOCK, stocksDetailSaga)
];
