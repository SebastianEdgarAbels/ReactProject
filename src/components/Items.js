import React, { useContext, useEffect } from "react";
import { GamesContext } from "../context/gamesContext.js";

import Cards from "./Cards.js";

function Items() {
  // hier is imported the context I create
  const { games, error, fetchGamesAsync, search } = useContext(GamesContext);
  // console.log("games :>> ", games);

  useEffect(() => {
    fetchGamesAsync();
  }, []);

  return (
    <div>
      {games &&
        games
          .filter((game) => {
            return game.title.toLowerCase().includes(search);
          })
          .map((game, i) => {
            return (
              <div key={i}>
                {" "}
                <Cards game={game} />
              </div>
            );
          })}
      {error && <p>${error}</p>}
    </div>
  );
}

export default Items;
