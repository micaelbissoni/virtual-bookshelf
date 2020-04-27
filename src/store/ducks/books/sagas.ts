import { call, put } from "redux-saga/effects";
import Api from "../../../services/api";

import {
  fetchBooksSuccess,
  fetchBooksFailure,
  addBookSuccess,
  addBookFailure,
  fetchBookSuccess,
  fetchBookFailure,
  fetchBooks,
} from "./actions";

export function* load(data?: any) {
  try {
    const payload = data && data.payload;
    const response = yield call(Api.get, { key: "Books", data: payload });
    yield put(fetchBooksSuccess(response));
  } catch (err) {
    yield put(fetchBooksFailure());
  }
}

export function* loadById(data: any) {
  try {
    const payload = data && data.payload;
    const response = yield call(Api.get, { key: "Books", data: payload });

    yield put(fetchBookSuccess(response));
  } catch (err) {
    yield put(fetchBookFailure());
  }
}

export function* add(data: any) {
  try {
    const { payload } = data;
    const response = yield call(Api.post, { key: "Books", data: payload });

    yield put(addBookSuccess(response));
    yield put(fetchBooks());
  } catch (err) {
    yield put(addBookFailure({}));
  }
}
