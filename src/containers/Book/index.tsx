import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Book } from "../../store/ducks/book/types";
import { ApplicationState } from "../../store";

import * as bookActions from "../../store/ducks/book/actions";
import BookDetails from "../../components/BookDetails";

interface StateProps {
  bookId: string;
  book: Book;
}

interface DispatchProps {
  loadRequest(data: string): void;
}

type Props = StateProps & DispatchProps;

class BookContainer extends Component<Props> {
  state = {
    currentBook: null,
  };

  componentDidMount() {
    const { loadRequest, bookId } = this.props;

    loadRequest(bookId);
  }

  render() {
    const { book } = this.props;
    return <BookDetails book={book} />;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  book: state.book.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(bookActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
