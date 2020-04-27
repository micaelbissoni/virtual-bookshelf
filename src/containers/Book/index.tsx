import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Redirect } from "react-router-dom";

import { Book } from "../../store/ducks/books/types";
import { ApplicationState } from "../../store";

import * as booksActions from "../../store/ducks/books/actions";
import BookFormContainer from "../BookForm";
import BookDetails from "../../components/BookDetails";

interface StateProps {
  bookId: string;
  book: Book;
}

interface DispatchProps {
  fetchBook(data: string): void;
}

type Props = StateProps & DispatchProps;

class BookContainer extends Component<Props> {
  componentDidMount() {
    const { fetchBook, bookId } = this.props;

    fetchBook(bookId);
  }

  render() {
    const { book } = this.props;
    if (!book || book.id === "") {
      return <Redirect to="/" />;
    }
    return (
      <>
        <BookFormContainer book={book} />
        <BookDetails book={book} />
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  book: state.books.book,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
