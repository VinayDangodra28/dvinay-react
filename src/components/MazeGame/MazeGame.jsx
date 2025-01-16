import { useState, useMemo, useEffect } from "react";
import { generateMaze, solve } from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./maze.css";

export default function MazeGame() {
  const [gameId, setGameId] = useState(1);
  const [status, setStatus] = useState("playing");
  const [steps, setSteps] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [lastChangeTime, setLastChangeTime] = useState(0); // Track the last maze change time

  const rows = 10;
  const cols = 45;

  const [userPosition, setUserPosition] = useState([0, 0]);

  // Regenerate the maze when `gameId` changes
  const maze = useMemo(() => generateMaze(cols, rows), [gameId]);

  // Calculate the solution of the current maze
  const solution = useMemo(() => {
    const s = new Set();
    const solutionPath = solve(maze, userPosition[0], userPosition[1]);
    solutionPath.forEach((path) => {
      const [x, y] = path;
      s.add(String(x) + "-" + String(y));
    });
    return s;
  }, [userPosition[0], userPosition[1], gameId]);

  // Check if the user has reached the destination
  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;

    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
      setTimeTaken(Date.now() - startTime);
    }
  }, [userPosition[0], userPosition[1], maze, startTime]);

  // Update the timer while playing
  useEffect(() => {
    let timer;
    if (status === "playing" && startTime) {
      timer = setInterval(() => {
        setTimeTaken(Date.now() - startTime);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [status, startTime]);

  // Regenerate the maze every 10 seconds based on `timeTaken`
  useEffect(() => {
    if (status === "playing" && timeTaken >= 10000) { // 10 seconds passed
      if (Date.now() - lastChangeTime >= 10000) { // Check if 10 seconds have passed since the last change
        setGameId((prevGameId) => prevGameId + 1); // Regenerate maze
        setLastChangeTime(Date.now()); // Update the last maze change time
        setTimeTaken(0); // Reset timer for the next 10-second countdown
      }
    }
  }, [timeTaken, status, lastChangeTime]);

  const makeClassName = (i, j) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) {
      arr.push("topWall");
    }
    if (maze[i][j][1] === 0) {
      arr.push("rightWall");
    }
    if (maze[i][j][2] === 0) {
      arr.push("bottomWall");
    }
    if (maze[i][j][3] === 0) {
      arr.push("leftWall");
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push("destination");
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push("currentPosition");
    }
    return arr.join(" ");
  };

  const handleKeyPress = (e) => {
    if (status !== "playing") return;

    const key = e.code;
    if (key === "ArrowUp" || key === "KeyW") handleMove("up");
    if (key === "ArrowRight" || key === "KeyD") handleMove("right");
    if (key === "ArrowDown" || key === "KeyS") handleMove("down");
    if (key === "ArrowLeft" || key === "KeyA") handleMove("left");
  };

  const handleMove = (direction) => {
    const [i, j] = userPosition;
    let moved = false;

    if (direction === "up" && maze[i][j][0] === 1) {
      setUserPosition([i - 1, j]);
      moved = true;
    }
    if (direction === "right" && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1]);
      moved = true;
    }
    if (direction === "down" && maze[i][j][2] === 1) {
      setUserPosition([i + 1, j]);
      moved = true;
    }
    if (direction === "left" && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1]);
      moved = true;
    }

    if (moved) {
      setSteps((prevSteps) => prevSteps + 1);
      if (!startTime) setStartTime(Date.now());
    }
  };

  const restartGame = () => {
    setUserPosition([0, 0]);
    setStatus("playing");
    setSteps(0);
    setStartTime(null);
    setTimeTaken(0);
    setGameId(gameId + 1);
    setLastChangeTime(Date.now()); // Reset the last change time on restart
  };

  return (
    <div id="mazegame" onKeyDown={handleKeyPress} tabIndex={0}>
      <div className="maze-setting-bar">
        <div className="left-setting">
          <div className="setting">
            <button onClick={restartGame}>Restart game</button>
          </div>
          <div className="steps-taken">Steps Taken: {steps}</div>
          <div className="timer">
            Time Taken: {status === "won" ? (timeTaken / 1000).toFixed(2) : (timeTaken / 1000).toFixed(2)} seconds
          </div>
        </div>
        <div className="right-setting">
          <p>Use WSAD or Arrow Keys to move</p>
          <div className="controls">
            <button onClick={() => handleMove("up")}><FontAwesomeIcon icon={faArrowUp} /></button>
            <div>
              <button onClick={() => handleMove("left")}><FontAwesomeIcon icon={faArrowLeft} /></button>
              <button onClick={() => handleMove("down")}><FontAwesomeIcon icon={faArrowDown} /></button>
              <button onClick={() => handleMove("right")}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
      </div>

      <table id="maze">
        <tbody>
          {maze.map((row, i) => (
            <tr key={`row-${i}`}>
              {row.map((cell, j) => (
                <td key={`cell-${i}-${j}`} className={makeClassName(i, j)}>
                  <div />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {status !== "playing" && (
        <div className="info" onClick={restartGame}>
          <p>You won! (Click here to play again)</p>
        </div>
      )}
    </div>
  );
}
