import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blueGrey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link as RouterLink } from "react-router-dom";

import { Book } from "../../store/ducks/books/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    header: {
      textAlign: "center",
    },
    media: {
      maxWidth: 300,
      margin: "auto",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    textContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    avatar: {
      backgroundColor: blueGrey[500],
    },
  })
);

interface OwnProps {
  book: Book;
}

export default function BookDetails({ book }: OwnProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    console.log(new Date(book.timestamp).toLocaleDateString("pt-BR"));
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="book" className={classes.avatar}>
              <RouterLink to={"/"}>
                <IconButton aria-label="back">
                  <ArrowBackIcon />
                </IconButton>
              </RouterLink>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={book?.title}
          subheader={book?.author}
        />
        <CardMedia
          className={classes.media}
          component="img"
          src={book.image}
          title={book.title}
        />
        <CardContent>
          <Typography
            className={classes.textContent}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <span>{book?.category}</span>
            <span>{new Date(book.timestamp).toLocaleDateString("pt-BR")}</span>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to Read">
            <BookmarksIcon />
          </IconButton>
          <IconButton aria-label="add to Reading">
            <MenuBookIcon />
          </IconButton>
          <IconButton aria-label="add to Favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{book?.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
