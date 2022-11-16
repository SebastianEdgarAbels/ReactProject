import { ThemeProvider } from "@emotion/react";
import {
  Button,
  createTheme,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const theme = createTheme({
  typography: {
    body: {
      color: teal[500],
    },
  },
});

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#009688",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "#80cbc4",
    borderWidth: 2,
  },
  ".css-1v4qvbo-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#009688",
  },
  // ".css-19285mc-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
  //   color: "#ffff00",
  // },
});

function Login() {
  const { login } = useContext(AuthContext);
  // console.log("register", register);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    // console.log("email", e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // console.log("password", e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    login(email, password);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="body" component="h2">
          Login
        </Typography>
      </ThemeProvider>
      <br />
      <ValidationTextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        value={email}
        color="secondary"
        onChange={handleEmailChange}
        autoComplete="off"
        style={{ color: "#009688" }}
      />
      <br />
      <br />

      <ValidationTextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={password}
        color="secondary"
        onChange={handlePasswordChange}
        autoComplete="off"

        // autoComplete="current-password"
      />
      <Typography color="#009688">Forgot your password?</Typography>

      {/* <input type="submit" value="submit" onClick={handleLogin} /> */}

      <Button
        sx={{ mt: 1, mr: 1 }}
        type="submit"
        variant="outlined"
        // color="secondary"
        onClick={handleLogin}
        style={{ color: "#009688", borderColor: "#009688" }}
      >
        Submit
      </Button>

      <br />
      <br />
      <Typography color="#009688">
        If you don't have an account,{" "}
        <Link
          to="/Register"
          style={{
            textDecoration: "none",
            color: "yellow",
          }}
        >
          SignUp here!
        </Link>
      </Typography>
    </div>
  );
}

export default Login;
