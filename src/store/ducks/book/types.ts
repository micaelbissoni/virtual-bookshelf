export enum BookTypes {
  REQUEST = "@book/REQUEST",
  SUCCCES = "@book/SUCCCES",
  FAILURE = "@book/FAILURE",
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

export interface BookState {
  readonly data: Book;
  readonly loading: boolean;
  readonly error: boolean;
}
