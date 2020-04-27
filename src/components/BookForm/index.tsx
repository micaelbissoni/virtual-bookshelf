import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Delete from "@material-ui/icons/Delete";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Book } from "../../store/ducks/books/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 35,
      width: "100%",
      background: "cornflowerblue",
    },
    appBar: {
      position: "relative",
    },
    form: {
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
      width: "100vw",
      height: 0,
      top: 25,
      position: "fixed",
      display: "flex",
      justifyContent: "center",
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
  isEdit: boolean;
}

export default function BookFormComponent({
  newBook,
  categories,
  startForm,
  changeHandler,
  handleFormSubmit,
  isEdit,
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
    <div className={classes.root}>
      <div className={classes.fixedButton}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          {isEdit ? <EditIcon /> : <AddIcon />}
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
              {newBook.deleted ? "Delete" : "save"}
            </Button>
          </Toolbar>
        </AppBar>
        <form
          className={classes.form}
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
          {isEdit && (
            <FormControlLabel
              control={
                <Checkbox
                  icon={<DeleteOutlined />}
                  checkedIcon={<Delete />}
                  name="deleted"
                  checked={newBook.deleted}
                  onChange={changeHandler}
                />
              }
              label="Delete this book"
            />
          )}
        </form>
      </Dialog>
    </div>
  );
}
