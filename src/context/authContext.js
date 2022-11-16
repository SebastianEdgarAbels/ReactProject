// 1. Import hook
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

// 2. Create Context / Store
export const AuthContext = createContext();

// 3. Create provider
export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  // console.log("auth", auth);
  const [isLoading, setIsLoading] = useState(true);
  const redirectTo = useNavigate();

  const register = (email, password) => {
    console.log("email :>> ", email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user :>> ", user);
        // ...
        redirectTo("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error :>> ", error);
        // ..
      });
  };

  const login = (email, password) => {
    console.log("email, password", email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        setUser(userCredential.user);
        console.log("auth in login:>> ", auth);
        console.log("user.credential:>> ", userCredential.user);
        redirectTo("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("login error", error);
      });
  };
  const logout = () => {
    // console.log("loggout");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("error by logging out", error);
      });
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("auth :>> ", auth);
      console.log("currentUser :>> ", currentUser);
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = currentUser.uid;
        // ...
        console.log("user is logged in ", uid);
        setUser(currentUser);

        console.log("this is the userState>>>:", currentUser);
        setIsLoading(false);
      } else {
        // User is signed out
        // ...
        console.log("user is NOT logged in ");
        console.log("this is the userState>>>:", currentUser);
        setUser(null);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    console.log("useEffect run>>>");
    console.log("user :>> ", user);
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        isLoading,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
