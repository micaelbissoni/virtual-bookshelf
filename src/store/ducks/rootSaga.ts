import { all, takeLatest } from "redux-saga/effects";

import { BooksTypes } from "./books/types";
import { load, add } from "./books/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.REQUEST, load),
    takeLatest(BooksTypes.ADD_ITEM, add),
  ]);
}
