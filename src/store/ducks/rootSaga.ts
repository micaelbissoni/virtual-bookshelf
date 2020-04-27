import { all, takeLatest } from "redux-saga/effects";

import { BooksTypes } from "./books/types";
import { load, loadById, add } from "./books/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.FETCH_BOOKS, load),
    takeLatest(BooksTypes.FETCH_BOOK, loadById),
    takeLatest(BooksTypes.ADD_BOOK, add),
  ]);
}
