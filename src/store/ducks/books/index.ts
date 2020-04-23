import { Reducer } from "redux";
import { BooksState, BooksTypes } from "./types";

const INITIAL_STATE: BooksState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<BooksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BooksTypes.REQUEST:
      return { ...state, loading: true };
    case BooksTypes.SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case BooksTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case BooksTypes.ADD_ITEM:
      return { ...state, loading: true };
    case BooksTypes.ADD_ITEM_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
