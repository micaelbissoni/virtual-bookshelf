import React from "react";

import { Book } from "../../store/ducks/books/types";

interface OwnProps {
  book: Book;
}

export default function BookItem({ book }: OwnProps) {
  return (
    <li>
      {book.title} <img src={book.image} alt="" />
    </li>
  );
}
