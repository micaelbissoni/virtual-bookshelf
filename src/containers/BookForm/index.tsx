import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { v4 as uuidv4 } from "uuid";

import { Book } from "../../store/ducks/books/types";
import { ApplicationState } from "../../store";

import * as booksActions from "../../store/ducks/books/actions";

import defaultBookImage from "./book-default.png";
import BookFormComponent from "../../components/BookForm";

interface StateProps {}

interface DispatchProps {
  addItem(book: Book): void;
}

type Props = StateProps & DispatchProps;

class BookFormContainer extends Component<Props> {
  initialState = {
    newBook: {
      id: "",
      title: "",
      description: "",
      timestamp: new Date(),
      image: defaultBookImage,
      author: "",
      category: "all",
      deleted: false,
    },
  };

  state = {
    categories: [
      {
        label: "Default",
        value: "all",
      },
      {
        label: "Currently Reading",
        value: "reading",
      },
      {
        label: "Want to Read",
        value: "wantToRead ",
      },
      {
        label: "Read",
        value: "read",
      },
    ],
    ...this.initialState,
  };

  constructor(props: Props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  startForm = () => {
    this.setState({
      newBook: {
        ...this.state.newBook,
        id: uuidv4(),
      },
    });
  };

  changeHandler = (event: {
    target: { name: string; value: string | boolean };
  }) => {
    const { name, value } = event.target;
    this.setState({
      newBook: {
        ...this.state.newBook,
        [name]: value,
      },
    });
  };

  handleFormSubmit(e: { preventDefault: () => void }) {
    const { newBook } = this.state;
    const { addItem } = this.props;
    addItem(newBook);
    e.preventDefault();
    this.handleClearForm();
  }

  handleClearForm() {
    this.setState({
      ...this.initialState,
    });
  }

  render() {
    const { newBook, categories } = this.state;

    return (
      <BookFormComponent
        startForm={this.startForm}
        handleFormSubmit={this.handleFormSubmit}
        changeHandler={this.changeHandler}
        newBook={newBook}
        categories={categories}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookFormContainer);
