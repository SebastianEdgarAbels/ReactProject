import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";

import Register from "./views/Register.js";
import Login from "./views/Login.js";
import Fav from "./views/Fav.js";
import Nav from "./components/nav/Nav.js";
import Nothing2see from "./views/Nothing2see.js";
import { GamesContextProvider } from "./context/gamesContext.js";
import View from "./views/View";
import { auth } from "./config";
import { AuthContextProvider } from "./context/authContext.js";
import StartPage from "./views/Start";
import Chat from "./components/Chat";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // console.log("auth :>> ", auth);
  // console.log("app :>> ", app);
  return (
    <div className="App">
      <AuthContextProvider>
        <GamesContextProvider>
          <Nav />
          <h1>Free Games</h1>

          <Routes>
            <Route
              path="/Chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<StartPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="fav" element={<Fav />} />
            <Route path="/details/:id" element={<View />} />
            <Route path="*" element={<Nothing2see />} />
          </Routes>
        </GamesContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
