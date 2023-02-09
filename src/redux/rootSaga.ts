import { all } from "redux-saga/effects";
import { todoSagas } from "./todo/sagas";

export default function* rootSaga() {
  yield all([...todoSagas]);
}
