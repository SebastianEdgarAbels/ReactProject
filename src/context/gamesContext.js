// 1. Import hook
import { createContext, useState } from "react";

// 2. Create Context / Store (This is the context I create)
export const GamesContext = createContext();

// 3. Create provider (This is the provider)
export const GamesContextProvider = (props) => {
  // console.log("props :>> ", props);

  // 4. Move state and function
  const [games, setGames] = useState();
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const getInput = (input) => {
    console.log("searchInput - getInput >>>>>: ", input.toLowerCase());
    setSearch(input.toLowerCase());
  };

  const fetchGamesAsync = async () => {
    try {
      const url =
        "https://cab-cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games";
      const response = await fetch(url);
      const results = await response.json();
      // console.log("results :>> ", results);
      setGames(results);
    } catch (error) {
      setError(error.message);
      // console.log("error :>> ", error);
    }
  };

  return (
    <GamesContext.Provider
      value={{ games, error, fetchGamesAsync, getInput, search }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};
