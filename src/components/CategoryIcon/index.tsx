import React from "react";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { IconButton } from "@material-ui/core";

interface OwnProps {
  currentCategory: string;
}

export default function CategoryIcon({ currentCategory }: OwnProps) {
  const renderSwitch = (param: String) => {
    switch (param) {
      case "read":
        return (
          <IconButton aria-label="This book is in the Read category">
            <BookmarksIcon />
          </IconButton>
        );
      case "reading":
        return (
          <IconButton aria-label="This book is in the Reading category">
            <MenuBookIcon />
          </IconButton>
        );
      case "wantToRead":
        return (
          <IconButton aria-label="This book is in the Favorites category">
            <FavoriteIcon />
          </IconButton>
        );
      default:
        return (
          <IconButton aria-label="Uncategorized book">
            <NotInterestedIcon />
          </IconButton>
        );
    }
  };

  return <>{renderSwitch(currentCategory)}</>;
}
