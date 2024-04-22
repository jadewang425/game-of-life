import './App.css';
import { useState } from 'react';
import Grid from './components/grid';

function App() {
  const numRows = 30
  const numCols = 30

  const [generation, setGeneration] = useState(0)
  const [grid, setGrid] = useState(
      Array(numRows).fill().map(() => Array(numCols).fill(false))
  )

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
  
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className='btns'>
        <button>Play</button>
        <button onClick={random}>Random</button>
      </div>
      <Grid 
        grid={grid}
        rows={numRows}
        cols={numCols}
        selectCell={selectCell}
      />
    </div>
  );
}

function arrClone(arr) {
  return JSON.parse(JSON.stringify(arr))
}

export default App;
