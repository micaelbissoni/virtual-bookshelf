export enum BooksTypes {
  FETCH_BOOKS = "@books/FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "@books/FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_FAILURE = "@books/FETCH_BOOKS_FAILURE",
  FETCH_BOOK = "@books/FETCH_BOOK",
  FETCH_BOOK_SUCCESS = "@books/FETCH_BOOK_SUCCESS",
  FETCH_BOOK_FAILURE = "@books/FETCH_BOOK_FAILURE",
  ADD_BOOK = "@books/ADD_BOOK",
  ADD_BOOK_SUCCESS = "@books/ADD_BOOK_SUCCESS",
  ADD_BOOK_FAILURE = "@books/ADD_BOOK_FAILURE",
}

export interface Book {
  id: string;
  title: string;
  timestamp: Date;
  image: string;
  description: string;
  author: string;
  category: string;
  deleted: boolean;
}

export interface BooksState {
  readonly book: Book;
  readonly books: Book[];
  readonly loading: boolean;
  readonly error: boolean;
}
