import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./PlayBtn.css";

import PlayersContext from "../store/players-context";

const PlayBtn = () => {
  const gameContext = useContext(PlayersContext);
  const status = gameContext.status;

  useEffect(() => {
    status.playerA = false;
    status.playerB = false;
  });

  useEffect(
    () => () => {
      localStorage.setItem("gameContext", JSON.stringify(gameContext));
    },
    []
  );

  return (
    <Link
      className={"play-btn"}
      to={status.playerA === true && status.playerB === true ? "/game" : "#"}
    >
      ►
    </Link>
  );
};

export default PlayBtn;
