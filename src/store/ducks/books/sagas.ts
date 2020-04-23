import { call, put } from "redux-saga/effects";
import Api from "../../../services/api";

import { success, failure } from "./actions";

export function* load() {
  try {
    const response = yield call(Api.get, "Books");
    yield put(success(response));
  } catch (err) {
    yield put(failure());
  }
}

export function* add(data: any) {
  try {
    const { payload } = data;
    const response = yield call(Api.post, { key: "Books", data: payload });

    yield put(success(response));
  } catch (err) {
    yield put(failure());
  }
}
