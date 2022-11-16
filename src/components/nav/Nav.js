import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { GamesContext } from "../../context/gamesContext.js";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import { AuthContext } from "../../context/authContext.js";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ButtonAppBar() {
  const { getInput } = useContext(GamesContext);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  // console.log("location", location);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {console.log("user in navbar", user)}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src="/images/face.ico"
              alt="pic"
              width={55}
              height={55}
              style={{ borderRadius: "45%" }}
            />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" style={{ textDecoration: "none", color: "green" }}>
                Start
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/Home"
                style={{ textDecoration: "none", color: "green" }}
              >
                Games
              </Link>
            </MenuItem>
            {user ? (
              <>
                <MenuItem
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "green" }}
                >
                  My account
                </MenuItem>
                <MenuItem
                  onClick={logout()}
                  style={{ textDecoration: "none", color: "green" }}
                >
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/Login"
                    style={{ textDecoration: "none", color: "green" }}
                  >
                    LogIn
                  </Link>
                </MenuItem>
              </>
            )}
          </Menu>

          {location.pathname === "/Home" && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                className="searchBar"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  // console.log(e.target.value);
                  getInput(e.target.value.toLocaleLowerCase());
                }}
              />
            </Search>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
