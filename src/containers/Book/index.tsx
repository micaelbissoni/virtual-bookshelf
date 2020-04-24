import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Book } from "../../store/ducks/books/types";
import { ApplicationState } from "../../store";

import * as booksActions from "../../store/ducks/books/actions";

interface StateProps {
  bookId: string;
  books: Book[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class BookContainer extends Component<Props> {
  state = {
    currentCategory: "",
  };

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { books, bookId } = this.props;
    const currentBooks = books.filter((book) => book.id === bookId);
    return <>{currentBooks[0].title}</>;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  books: state.books.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
