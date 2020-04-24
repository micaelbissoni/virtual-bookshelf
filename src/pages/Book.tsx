import React from "react";
import { useParams } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import BookContainer from "../containers/Book";

interface RouteParams {
  id: string;
}

const Book = () => {
  const params = useParams<RouteParams>();
  return (
    <Provider store={store}>
      <BookContainer bookId={params.id} />
    </Provider>
  );
};

export default Book;
