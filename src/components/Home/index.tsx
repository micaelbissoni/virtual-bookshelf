import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Book } from "../../store/ducks/books/types";
import { ApplicationState } from "../../store";

import * as booksActions from "../../store/ducks/books/actions";

import BookForm from "../BookForm";
import BookItem from "../BookItem";

interface StateProps {
  books: Book[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class HomeComponent extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { books } = this.props;

    return (
      <>
        <BookForm />
        <ul>
          Lista dos Livros
          {books && books.map((book) => <BookItem key={book.id} book={book} />)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  books: state.books.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
