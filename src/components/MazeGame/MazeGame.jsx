import { useState, useMemo, useEffect } from "react";
import { generateMaze, solve } from "./util";
import "./maze.css";

export default function MazeGame() {
  const [gameId, setGameId] = useState(1);
  const [status, setStatus] = useState("playing");
  const [steps, setSteps] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [timeTaken, setTimeTaken] = useState(0);

  // set cols and rows in this below lines
  const rows = 5;
  const cols = 45;


// const [cheatMode, setCheatMode] = useState(false);
  const [userPosition, setUserPosition] = useState([0, 0]);

  const maze = useMemo(() => generateMaze(cols, rows), [gameId]);
  const solution = useMemo(() => {
    const s = new Set();
    const solutionPath = solve(maze, userPosition[0], userPosition[1]);
    solutionPath.forEach((path) => {
      const [x, y] = path;
      s.add(String(x) + "-" + String(y));
    });
    return s;
  }, [userPosition[0], userPosition[1], gameId]);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;
    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
      setTimeTaken(Date.now() - startTime);
    }
  }, [userPosition[0], userPosition[1]]);

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
    // if (cheatMode && solution.has(String(i) + "-" + String(j))) {
    //   arr.push("sol");
    // }
    return arr.join(" ");
  };

  const handleKeyPress = (e) => {
    if (status !== "playing") {
      return;
    }
    const key = e.code;

    if (key === "ArrowUp" || key === "KeyW") {
      handleMove("up");
    }
    if (key === "ArrowRight" || key === "KeyD") {
      handleMove("right");
    }
    if (key === "ArrowDown" || key === "KeyS") {
      handleMove("down");
    }
    if (key === "ArrowLeft" || key === "KeyA") {
      handleMove("left");
    }
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
    }
  };

  const restartGame = () => {
    setUserPosition([0, 0]);
    setStatus("playing");
    setSteps(0);
    setStartTime(Date.now());
    setGameId(gameId + 1);
  };

  return (
    <div id="mazegame" onKeyDown={handleKeyPress} tabIndex={0}>
      <div className="App">
        <div className="setting">
          <button onClick={restartGame}>Restart game</button>
        </div>
        <p>Use WSAD or Arrow Keys to move</p>
        {/* <div>
          <label htmlFor="cheatMode">Cheat mode</label>
          <input
            type="checkbox"
            name="cheatMode"
            onChange={(e) => setCheatMode(e.target.checked)}
          />
        </div> */}

        <div className="controls">
          <button onClick={() => handleMove("up")}>Up</button>
          <div>
            <button onClick={() => handleMove("left")}>Left</button>
            <button onClick={() => handleMove("right")}>Right</button>
          </div>
          <button onClick={() => handleMove("down")}>Down</button>
        </div>
        <p>Steps Taken: {steps}</p>
        <p>Time Taken: {status === "won" ? (timeTaken / 1000).toFixed(2) : ((Date.now() - startTime) / 1000).toFixed(2)} seconds</p>
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
    </div>
  );
} 