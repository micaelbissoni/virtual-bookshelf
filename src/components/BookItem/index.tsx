import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Book } from "../../store/ducks/books/types";
import CategoryIcon from "../CategoryIcon";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 250,
    margin: theme.spacing(2),
  },
  cardHeader: {
    minHeight: 120,
  },
  media: {
    height: 190,
    backgroundSize: "contain",
  },
  cardContent: {
    textAlign: "right",
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
        className={classes.cardHeader}
        title={book.title}
        subheader={book.author}
      />
      <RouterLink to={`/book/${book.id}`}>
        <CardMedia
          className={classes.media}
          image={book.image}
          title={book.title}
        />
      </RouterLink>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          <span>
            {new Date(book.timestamp).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          <CategoryIcon currentCategory={book.category} />
        </Typography>
      </CardContent>
    </Card>
  );
}
