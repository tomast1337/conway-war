import React, { useRef, useEffect, useState } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";

import "./Canvas.css";
import buildArray from "../utils/buildArray";
import renderGrid from "../utils/renderGrid";
import createNextGen from "../utils/createNextGen";

const Canvas = ({
  players,
}: {
  players: {
    playerOne: number;
    playerTwo: number;
  };
}) => {
  const [isPaused, setIsPaused] = useState(true);
  const [start, setStart] = useState(null);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const boardRef = useRef(null);
  const stopRef = useRef(false);

  const playerData = players;

  const animate = () => {
    if (stopRef.current) {
      return;
    }

    requestAnimationFrame(() => {
      animate(boardRef.current, contextRef.current);
    });

    renderGrid(boardRef.current, contextRef.current);
    boardRef.current = createNextGen(boardRef.current);
  };

  function startAnimating() {
    stopRef.current = !stopRef.current;
    setIsPaused(stopRef.current);

    animate();
  }

  function resetBoard() {
    boardRef.current = start;
    stopRef.current = true;
    renderGrid(boardRef.current, contextRef.current);
  }

  function cancelRightButtonClick(
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleClick = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (e.button === 0) {
      startAnimating();
    } else if (e.button === 2) {
      resetBoard();
    }
  };

  useEffect(() => {
    stopRef.current = true;
    setIsPaused(stopRef.current);

    const canvas = canvasRef.current;
    const board = buildArray(playerData.playerOne, playerData.playerTwo);
    boardRef.current = board;
    setStart(board);

    contextRef.current = canvas.getContext("2d");
    canvas.width = 700;
    canvas.height = 350;

    renderGrid(boardRef.current, contextRef.current);
  }, [playerData]);

  return (
    <main className={"canvas__container"}>
      <div onMouseDown={handleClick} className="canvas__togglePannel">
        {isPaused ? (
          <IoMdPlay
            size={70}
            onContextMenu={cancelRightButtonClick}
            className="canvas__togglePannel--play"
          />
        ) : (
          <IoMdPause
            size={70}
            onContextMenu={cancelRightButtonClick}
            className="canvas__togglePannel--pause"
          />
        )}
        <canvas
          className="canvas"
          onContextMenu={cancelRightButtonClick}
          ref={canvasRef}
        />
      </div>
    </main>
  );
};

export default Canvas;
