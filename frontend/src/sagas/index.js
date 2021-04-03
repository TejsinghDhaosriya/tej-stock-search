import { all } from "redux-saga/effects";

import { stocksSagas } from "../components/stock/sagas/index";

export default function* rootSaga() {
  yield all([...stocksSagas]);
}
