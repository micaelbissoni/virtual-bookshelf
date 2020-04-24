import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Book } from "../../store/ducks/books/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    root: {
      padding: "1px 5px 10px",
      "& > div": {
        margin: "10px 0 15px",
      },
      "& > *": {
        width: "100%",
      },
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    fixedButton: {
      position: "fixed",
      right: "10px",
      top: "10px",
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface OwnProps {
  newBook: Book;
  categories: any[];
  startForm: any;
  changeHandler: any;
  handleFormSubmit: any;
}

export default function BookFormComponent({
  newBook,
  categories,
  startForm,
  changeHandler,
  handleFormSubmit,
}: OwnProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    startForm();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.fixedButton}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              new Book
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={(evt) => {
                handleClose();
                handleFormSubmit(evt);
              }}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <TextField
            name="title"
            label={"Enter book title"}
            defaultValue={newBook.title}
            onChange={changeHandler}
          />
          <TextField
            multiline
            rows={5}
            name="description"
            label={"Enter book description"}
            defaultValue={newBook.description}
            onChange={changeHandler}
          />
          <TextField
            name="author"
            label={"Enter book author"}
            defaultValue={newBook.author}
            onChange={changeHandler}
          />
          <Select
            name="category"
            value={newBook.category}
            onChange={changeHandler}
          >
            {categories &&
              categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
          </Select>
        </form>
      </Dialog>
    </div>
  );
}
