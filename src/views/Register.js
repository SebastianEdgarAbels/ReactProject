import { Button, styled, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext.js";

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

function Register() {
  const { register } = useContext(AuthContext);
  // console.log("register", register);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log("email", e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log("password", e.target.value);
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <>
      <Typography variant="h5" component="h2" color="#009688">
        Register u smartpants
      </Typography>
      <br />
      <ValidationTextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        value={email}
        color="secondary"
        onChange={handleEmailChange}
        // autoComplete="off"
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
      <br />
      <br />

      {/* <TextField
        id="outlined-password-input"
        label="Confirm password"
        type="password"
        // autoComplete="current-password"
      /> */}

      <Button
        sx={{ mt: 1, mr: 1 }}
        type="submit"
        variant="outlined"
        onClick={handleRegister}
        style={{ color: "#009688", borderColor: "#009688" }}
      >
        Register
      </Button>
    </>
  );
}

export default Register;
