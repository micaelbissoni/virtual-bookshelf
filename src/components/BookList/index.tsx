import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Book } from "../../store/ducks/books/types";
import BookItem from "../BookItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "56px",
    },
    container: {
      justifyContent: "center",
    },
  })
);

interface OwnProps {
  books: Book[];
}

export default function BookList({ books }: OwnProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={0}>
        {books &&
          books.map((book) => (
            <Grid item key={book.id}>
              <BookItem book={book} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
