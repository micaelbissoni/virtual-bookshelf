import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Bookmarks from "@material-ui/icons/Bookmarks";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuBook from "@material-ui/icons/MenuBook";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});

interface OwnProps {
  inputValue: string;
  handleChange: any;
}

export default function BookToolbar({ inputValue, handleChange }: OwnProps) {
  const classes = useStyles();
  return (
    <BottomNavigation
      value={inputValue}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Read" value="read" icon={<Bookmarks />} />
      <BottomNavigationAction
        label="Reading"
        value="reading"
        icon={<MenuBook />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="wantToRead"
        icon={<FavoriteIcon />}
      />
    </BottomNavigation>
  );
}
