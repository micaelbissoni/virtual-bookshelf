import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import DateRangeIcon from "@material-ui/icons/DateRange";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
  },
});

interface OwnProps {
  inputValue: string;
  handleChange: any;
}

export default function OrderToolbar({ inputValue, handleChange }: OwnProps) {
  const classes = useStyles();
  return (
    <BottomNavigation
      value={inputValue}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Sort By A-Z"
        value="title"
        icon={<SortByAlphaIcon />}
      />
      <BottomNavigationAction
        label="Sort By Date"
        value="timestamp"
        icon={<DateRangeIcon />}
      />
    </BottomNavigation>
  );
}
