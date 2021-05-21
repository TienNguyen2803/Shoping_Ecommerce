import { all } from "redux-saga/effects";
import HomeSaga from ".";

export default function* rootSaga() {
  yield all([HomeSaga()]);
}
