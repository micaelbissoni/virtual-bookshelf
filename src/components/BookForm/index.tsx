import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { v4 as uuidv4 } from "uuid";

import { Book } from "../../store/ducks/books/types";
import { ApplicationState } from "../../store";

import * as booksActions from "../../store/ducks/books/actions";

import defaultBookImage from "./book-default.png";

interface StateProps {}

interface DispatchProps {
  addItem(book: Book): void;
}

type Props = StateProps & DispatchProps;

class BookForm extends Component<Props> {
  state = {
    newBook: {
      id: uuidv4(),
      title: "",
      description: "",
      timestamp: new Date(),
      image: defaultBookImage,
      author: "",
      category: "",
      deleted: false,
    },
    categories: [
      {
        label: "Default",
        value: null,
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
        value: "read ",
      },
    ],
  };
  constructor(props: Props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  componentDidMount() {}

  changeHandler = (event: {
    target: { name: string; value: string | boolean };
  }) => {
    const { state } = this;
    const { name, value } = event.target;
    this.setState({
      newBook: {
        ...state.newBook,
        [name]: value,
      },
    });
  };

  handleFormSubmit(e: { preventDefault: () => void }) {
    this.setState({
      newBook: {
        ...this.state.newBook,
        id: uuidv4(),
      },
    });
    const { newBook } = this.state;
    const { addItem } = this.props;

    addItem(newBook);
    e.preventDefault();
  }

  handleClearForm() {
    // Logic for resetting the form
  }

  render() {
    const { newBook } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          title:
          <input
            type="text"
            name="title"
            placeholder={"Enter book title"}
            defaultValue={newBook.title}
            onChange={this.changeHandler}
          />
        </label>
        <label>
          description:
          <input
            type="text"
            name="description"
            placeholder={"Enter book description"}
            defaultValue={newBook.description}
            onChange={this.changeHandler}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
