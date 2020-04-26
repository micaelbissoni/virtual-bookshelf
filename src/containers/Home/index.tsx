import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Book } from "../../store/ducks/books/types";
import { ApplicationState } from "../../store";

import * as booksActions from "../../store/ducks/books/actions";

import BookList from "../../components/BookList";
import BookToolbar from "../../components/BookToolbar";
import BookFormContainer from "../BookForm";

interface StateProps {
  books: Book[];
}

interface DispatchProps {
  fetchBooks(): void;
}

type Props = StateProps & DispatchProps;

class HomeContainer extends Component<Props> {
  state = {
    currentCategory: "all",
  };

  componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();
  }

  changeCategory = (event: React.ChangeEvent<{}>, newValue: string) => {
    const { currentCategory } = this.state;
    if (currentCategory === newValue) {
      this.setState({ currentCategory: "all" });
    } else {
      this.setState({ currentCategory: newValue });
    }
  };

  render() {
    const { books } = this.props;
    const { currentCategory } = this.state;
    const currentBooks = books
      ? books.filter((book) => book.category === currentCategory)
      : [];
    return (
      <>
        <BookFormContainer />
        <BookList books={currentBooks} />
        <BookToolbar
          handleChange={this.changeCategory}
          inputValue={currentCategory}
        />
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  books: state.books.books,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
