import { Reducer } from "redux";
import { BooksState, BooksTypes } from "./types";

const INITIAL_STATE: BooksState = {
  books: [],
  book: {
    id: "",
    title: "",
    description: "",
    timestamp: new Date(),
    image: "",
    author: "",
    category: "all",
    deleted: false,
  },
  error: false,
  loading: false,
};

const reducer: Reducer<BooksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.FETCH_BOOKS:
      return { ...state, loading: true };
    case BooksTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        books: action.payload.data,
      };
    case BooksTypes.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case BooksTypes.FETCH_BOOK:
      return { ...state, loading: true };
    case BooksTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        book: action.payload.data,
      };
    case BooksTypes.FETCH_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case BooksTypes.ADD_BOOK:
      return { ...state, loading: true };
    case BooksTypes.ADD_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        book: action.payload.data,
      };
    case BooksTypes.ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
