import { all, fork, takeLatest } from "redux-saga/effects";
function* GetHomeSaga({ payload }) {
  try {
    console.log("Home Saga");
  } catch (error) {
    let result = error.response.data.message;
    console.log();
  }
}

export function* GetHome() {
  yield takeLatest("LOGIN", GetHomeSaga);
}

export default function* rootSaga() {
  yield all([fork(GetHome)]);
}
