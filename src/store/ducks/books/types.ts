export enum BooksTypes {
  REQUEST = "@books/REQUEST",
  SUCCCES = "@books/SUCCCES",
  FAILURE = "@books/FAILURE",
  ADD_ITEM = "@books/ADD_ITEM",
  ADD_ITEM_SUCCCES = "@books/ADD_ITEM_SUCCCES",
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
  readonly data: Book[];
  readonly loading: boolean;
  readonly error: boolean;
}
