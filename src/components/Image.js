import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Image({ image, gameTitle, auth }) {
  // console.log("image, gametitle auth", image);

  return (
    <ImageList className="Image">
      <ImageListItem key={image}>
        <img
          src={image}
          // `${image}?w=248&fit=crop&auto=format`
          srcSet={image}
          alt={gameTitle}
          loading="lazy"
        />
        <ImageListItemBar
          title={gameTitle}
          subtitle={<span>by: {auth}</span>}
          position="below"
        />
        <StarBorderIcon />
        <Button>I am here</Button>
      </ImageListItem>
    </ImageList>
  );
}
