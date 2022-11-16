import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

function Nothing2see() {
  return (
    <>
      <Typography variant="h4" component="h3" color="#009688">
        Nothing2see Here !!!
      </Typography>
      <br />
      <br />
      <br />
      <br />

      <Typography color="#009688">
        Go back{" "}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "yellow",
          }}
        >
          HOME
        </Link>
      </Typography>
      <Typography color="#009688">or</Typography>
      <Typography color="#009688">
        2 the{" "}
        <Link
          to="/Home"
          style={{
            textDecoration: "none",
            color: "yellow",
          }}
        >
          Games <SportsEsportsIcon />
        </Link>
      </Typography>
    </>
  );
}

export default Nothing2see;
