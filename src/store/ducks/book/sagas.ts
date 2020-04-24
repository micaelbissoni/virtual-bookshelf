import { call, put } from "redux-saga/effects";
import Api from "../../../services/api";

import { success, failure } from "./actions";

export function* load(data: any) {
  try {
    const { payload } = data;
    const response = yield call(Api.get, { key: "Books", data: payload });

    yield put(success(response));
  } catch (err) {
    yield put(failure());
  }
}
