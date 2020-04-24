import { all, takeLatest } from "redux-saga/effects";

import { BooksTypes } from "./books/types";
import { load, add } from "./books/sagas";

import { BookTypes } from "./book/types";
import { load as loadBook } from "./book/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.REQUEST, load),
    takeLatest(BooksTypes.ADD_ITEM, add),
    takeLatest(BookTypes.REQUEST, loadBook),
  ]);
}
