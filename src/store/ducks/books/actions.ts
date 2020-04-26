import { action } from "typesafe-actions";
import { BooksTypes, Book } from "./types";

export const fetchBooks = () => action(BooksTypes.FETCH_BOOKS);
export const fetchBooksSuccess = (data: Book[]) =>
  action(BooksTypes.FETCH_BOOKS_SUCCESS, { data });
export const fetchBooksFailure = () => action(BooksTypes.FETCH_BOOKS_FAILURE);

export const fetchBook = (data: string) => action(BooksTypes.FETCH_BOOK, data);
export const fetchBookSuccess = (data: Book) =>
  action(BooksTypes.FETCH_BOOK_SUCCESS, { data });
export const fetchBookFailure = () => action(BooksTypes.FETCH_BOOK_FAILURE);

export const addBook = (data: Book) => action(BooksTypes.ADD_BOOK, data);
export const addBookSuccess = (data: Book) =>
  action(BooksTypes.ADD_BOOK_SUCCESS, { data });
export const addBookFailure = () => action(BooksTypes.ADD_BOOK_FAILURE);
