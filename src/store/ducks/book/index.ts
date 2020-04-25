import { Reducer } from "redux";
import { BookState, BookTypes } from "./types";

const INITIAL_STATE: BookState = {
  data: {
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

const reducer: Reducer<BookState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookTypes.REQUEST:
      return { ...state, loading: true };
    case BookTypes.SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case BookTypes.FAILURE:
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
