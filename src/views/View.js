import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TitleImage from "../components/TitleImage";
import "./View.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Button } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StarRateIcon from "@mui/icons-material/StarRate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const element = (
  <FontAwesomeIcon
    icon={faPaperPlane}
    style={{ color: "#009688" }}
    onClick={(e) => {
      console.log("send this >>>:", e.target.value);
    }}
  />
);

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
        <div className="containerView">
          <div id="img">
            <img src={details.thumbnail} alt={details.title} />
            {/* <div>
              <p>{details.title}</p>
              <p>{details.developer}</p>
            </div> */}

            <div className="starButtonAndLike">
              <div className="starButtContainer">
                <StarBorderIcon
                  style={{ color: "#009688", borderColor: "#009688" }}
                  onClick={(e) => {
                    console.log("StarClicked:>>>>", e.target.value);
                  }}
                />
              </div>
              <Button
                variant="outlined"
                style={{ color: "#009688", borderColor: "#009688" }}
              >
                Play NOW!{" "}
                <SportsEsportsIcon
                  style={{ color: "#009688", borderColor: "#009688" }}
                />
              </Button>
            </div>
          </div>
          <main>
            <h3>About {details.title}</h3>
            <p>{details.description}</p>
          </main>
          <div id="aditionalInfo">
            <h3>Aditional Information</h3>
            <div className="aditionalInfoFlex">
              <div>
                <h5>Title</h5>
                <p>{details.title}</p>
              </div>
              <div>
                <h5>Developer</h5>
                <p>{details.developer}</p>
              </div>
              <div>
                <h5>Publisher</h5>
                <p>{details.publisher}</p>
              </div>
              <div>
                <h5>Release Date</h5>
                <p>{details.release_date}</p>
              </div>
              <div>
                <h5>Genre</h5>
                <p>{details.genre}</p>
              </div>
              <div>
                <h5>Platform</h5>
                <p>{details.platform}</p>
              </div>
            </div>
          </div>
          <div id="screenshots">
            <h3>{details.title}'s Screenshots</h3>
            <div id="titleImg">
              <TitleImage
                className="screenshotImg"
                images={details.screenshots}
                gametitle={details.title}
              />
            </div>
          </div>
          {details.minimum_system_requirements ? (
            <div id="systemRequirements">
              <h3>Minimum System Requirements({details.platform})</h3>
              <div className="minSysReqFlex">
                <div>
                  <h5> OS:</h5>
                  <p>{details.minimum_system_requirements.os}</p>
                </div>
                <div>
                  <h5> Memory:</h5>
                  <p>{details.minimum_system_requirements.memory}</p>
                </div>
                <div>
                  <h5> Storage:</h5>
                  <p>{details.minimum_system_requirements.storage}</p>
                </div>
                <div>
                  <h5> Processor:</h5>
                  <p>{details.minimum_system_requirements.processor}</p>
                </div>
                <div>
                  <h5> Graphics:</h5>
                  <p>{details.minimum_system_requirements.graphics}</p>
                </div>
                <div>
                  <h5> Additional Notes:</h5>
                  <p>Specifications may change during development</p>
                </div>
              </div>
            </div>
          ) : (
            <div id="systemRequirements">
              <p>
                {" "}
                {details.title} is a browser based game and should run smoothly
                on practically any PC with a updated web-browser. If you have
                old hardware or software, you may still be able to play Forge of
                Empires, but your game experience may suffer. For the best
                gameplay experience, we recommend the latest versions of
                Firefox, Chrome, or Internet Explorer.
              </p>
            </div>
          )}
          <div id="user-Reviews">
            <textarea
              id="comments"
              placeholder="Write your comment here"
              name="comments"
              style={{ borderRadius: "5%" }}
              onKeyDown={(e) => {
                console.log("textarea>>>>:", e.target.value);
              }}
            ></textarea>
            <div className="sendImg">{element}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default View;
