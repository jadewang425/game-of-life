import './App.css';
import { useCallback, useRef, useState } from 'react';
import Grid from './components/grid';
import useInterval from './helper';

function App() {
  const numRows = 30
  const numCols = 30

  const [generation, setGeneration] = useState(0)
  const [grid, setGrid] = useState(
      Array(numRows).fill().map(() => Array(numCols).fill(false))
  )
  const [running, setRunning] = useState(false)

  const selectCell = (row, col) => {
    let currGrid = arrClone(grid)
    currGrid[row][col] = !currGrid[row][col]
    setGrid(currGrid)
  }

  const random = () => {
    let initGrid = arrClone(grid)
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        initGrid[i][j] = Math.floor(Math.random() * 2)
      }
    }
    setGrid(initGrid)
  }

  // useCallback to prevent function from create every time the component is rendered
  const run = useCallback((grid) => {
    // delayed first click?
    if (!running) return
    let updateGrid = arrClone(grid)
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        let count = 0
        if (i > 0 && j > 0) {
          if (grid[i-1][j-1]) {
            count++
          }
        }
        if (i > 0) {
          if (grid[i-1][j]) {
            count++
          }
        }
        if (i > 0 && j < numCols - 1) {
          if (grid[i-1][j+1]) {
            count++
          }
        }
        if (j > 0) {
          if (grid[i][j-1]) {
            count++
          }
        }
        if (j < numCols - 1) {
          if (grid[i][j+1]) {
            count++
          }
        }
        if (i < numRows - 1 && j > 0) {
          if (grid[i+1][j-1]) {
            count++
          }
        }
        if (i < numRows - 1) {
          if (grid[i+1][j]) {
            count++
          }
        }
        if (i < numRows - 1 && j < numCols - 1) {
          if (grid[i+1][j+1]) {
            count++
          }
        }
        if (grid[i][j] && (count < 2 || count > 3)) {
          updateGrid[i][j] = false
        }
        if (!grid[i][j] && count === 3) {
          updateGrid[i][j] = true
        }
      }
    }
    setGrid(updateGrid)
    setGeneration(generation + 1)
  }, [running, generation])

  // custom hook
  useInterval(() => {
    run(grid)
  }, 150)

  
  const play = () => {
    setRunning(true)
  }
  
  const stop = () => {
    setRunning(false)
  }

  const restart = () => {
    setGrid(Array(numRows).fill().map(() => Array(numCols).fill(false)))
    setGeneration(0)
  }
  
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className='btns'>
        <button onClick={random}>Random</button>
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
        <button onClick={restart}>Restart</button>
      </div>
      <Grid 
        grid={grid}
        rows={numRows}
        cols={numCols}
        selectCell={selectCell}
      />
      <p>Generation: {generation}</p>
    </div>
  );
}

function arrClone(arr) {
  return JSON.parse(JSON.stringify(arr))
}

export default App;
