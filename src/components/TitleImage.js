import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import "./TitleImage.css";

export default function TitleImage({ images, gameTitle }) {
  //   console.log("images :>> ", typeof image);

  return (
    // <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
    <div className="imgList">
      {images &&
        images.map((image) => (
          <div key={image.id}>
            <Typography>{gameTitle}</Typography>

            <img
              className="img12"
              src={`${image.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={gameTitle}
              loading="lazy"
              // src={image.image}
              // alt={gameTitle}
            />
          </div>
        ))}
      {/* </ImageList> */}
    </div>
  );
}
