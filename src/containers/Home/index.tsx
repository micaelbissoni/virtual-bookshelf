import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Book } from "../../store/ducks/books/types";
import { ApplicationState } from "../../store";

import * as booksActions from "../../store/ducks/books/actions";

import BookList from "../../components/BookList";
import BookToolbar from "../../components/BookToolbar";
import BookFormContainer from "../BookForm";
import OrderToolbar from "../../components/OrderToolbar";

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
    currentOrderBy: "",
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

  changeOrder = (event: React.ChangeEvent<{}>, newValue: string) => {
    const { currentOrderBy } = this.state;
    if (currentOrderBy === newValue) {
      this.setState({ currentOrderBy: "" });
    } else {
      this.setState({ currentOrderBy: newValue });
    }
  };

  orderBy() {
    const { books } = this.props;
    const { currentCategory, currentOrderBy } = this.state;
    return books
      .filter(
        (book) => book.category === currentCategory || currentCategory === "all"
      )
      .sort((a: Book, b: Book) => {
        if (a.category === "all" && !currentOrderBy) {
          return -1;
        } else {
          if (currentOrderBy === "timestamp") {
            if (new Date(a.timestamp) > new Date(b.timestamp)) return -1;
          }

          if (currentOrderBy === "title") {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
          }
        }
        return 0;
      });
  }

  render() {
    const { currentCategory, currentOrderBy } = this.state;
    const currentBooks = this.orderBy();
    return (
      <>
        <OrderToolbar
          handleChange={this.changeOrder}
          inputValue={currentOrderBy}
        />
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
