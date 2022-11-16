import React from "react";
import "./Cards.css";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// import { IconButton, ImageList, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";

function Cards({ game }) {
  return (
    <Card>
      <div className="cols">
        <div className="col">
          {/* onTouchStart={this.classList.toggle("hover")} //this was in the upper div after className='col' */}
          <div className="container">
            <div
              className="front"
              style={{ backgroundImage: `url(${game.thumbnail})` }}
            >
              <div className="inner">
                {/* <p>{game.title}</p>
                            <span>{game.genre} </span> */}
              </div>
            </div>

            {/* <CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </CardContent> */}

            <div className="back">
              <Link to={`/details/${game.id}`}>
                <div className="inner">
                  <p>{game.title}</p>
                  <span>{game.genre} </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Cards;
