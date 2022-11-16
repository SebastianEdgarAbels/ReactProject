import { ThemeProvider } from "@emotion/react";
import { createTheme, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const theme = createTheme({
  typography: {
    body: {
      color: teal[500],
    },
  },
});

export default function StartPage() {
  const imagePath = "/images/Naruto.ico";
  const imageAlt = "naruto";

  return (
    <>
      <div>
        <img src={imagePath} alt={imageAlt} style={{ borderRadius: "45%" }} />
      </div>
      <br />
      <br />

      <ThemeProvider theme={theme}>
        <Typography variant="body">
          This Website is made with the API from{" "}
          <a
            href="https://www.freetogame.com/"
            style={{
              textDecoration: "none",
              color: "yellow",
              // ":hover": "#ff9800",

              ":hover": {
                textDecoration: "underline",
                // background: "#ff9800",
              },
            }}
          >
            freetogame
          </a>{" "}
          and was made for learning purposes. This project was made with use of
          React, Material UI, Firebase/Firestore.
        </Typography>
      </ThemeProvider>
    </>
  );
}
