import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function ProtectedRoute({ children }) {
  console.log("protected route props", children);

  const { user, isLoading } = useContext(AuthContext);

  //   const isAuthenticated = user ? true : false;
  console.log("user :>> ", user);
  //   console.log("children :>> ", children);

  return (
    // <div>
    //   {isLoading ? (
    //     <p>... is loading</p>
    //   ) : user ? (
    //     children
    //   ) : (
    //     <Navigate to="/Home" />
    //   )}
    // </div>
    <div>this is the chat</div>
  );
}

export default ProtectedRoute;
