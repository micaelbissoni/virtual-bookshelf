import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Book } from "../../store/ducks/books/types";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 250,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
    backgroundSize: "contain",
  },
}));

interface OwnProps {
  book: Book;
}

export default function BookItem({ book }: OwnProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar alt={book.author} src="" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={book.title}
        subheader={book.author}
      />
      <CardMedia
        className={classes.media}
        image={book.image}
        title={book.title}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {book.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
