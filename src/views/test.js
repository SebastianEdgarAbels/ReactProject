import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "../components/Image";
// import TitleImage from "../components/TitleImage";
import "./View.css";

const View = () => {
  const location = useLocation();
  const params = useParams();
  //   console.log("location", location);
  //   console.log("params :>> ", params.id);

  const [errorDetails, setErrorDetails] = useState(null);
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const urlDetails = `https://cab-cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${params.id}`;
      const response = await fetch(urlDetails);
      const results = await response.json();
      console.log("result :>> ", results);
      setDetails(results);
      // console.log("details", details.screenshots);
    } catch (error) {
      setErrorDetails(error.message);
    }
  };
  // console.log("details", details);

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {details && (
        <div id="Container">
          <div classNAme="container">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>
                <Image
                  className="img"
                  image={details.thumbnail}
                  gameTitle={details.title}
                  auth={details.developer}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>
                <Typography>About {details.title}</Typography>
                <Typography>{details.description}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {/* hier ARE the DETAILS */}
              {/* <Paper>
                <TitleImage
                  images={details.screenshots}
                  gametitle={details.title}
                />
              </Paper> */}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>
                <Typography>
                  Minimum System Requirements({details.platform})
                </Typography>

                <Typography>
                  OS: {details.minimum_system_requirements.os}
                </Typography>

                <Typography>
                  Memory: {details.minimum_system_requirements.memory}
                </Typography>

                <Typography>
                  Storage: {details.minimum_system_requirements.storage}
                </Typography>

                <Typography>
                  Processor: {details.minimum_system_requirements.processor}
                </Typography>

                <Typography>
                  Graphics: {details.minimum_system_requirements.graphics}
                </Typography>
                <Typography>
                  Additional Notes: Specifications may change during development
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>User Reviews</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>6</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>7</Paper>
            </Grid>
          </div>
          {/* <div>view</div>
      {errorDetails && <p>${errorDetails}</p>} */}
        </div>
      )}
    </>
  );
};

export default View;
