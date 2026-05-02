
const Cell = (props) => {
    const { cellClass, cellId, row, col, selectCell, color } = props

    return (
        <div
            className={cellClass}
            id={cellId}
            style={{ backgroundColor: color }}
            onClick={() => selectCell(row, col)}
        ></div>
    )
}

export default function Grid (props) {
    const { grid, rows, cols, selectCell, aliveColor, deadColor } = props
    const width = cols * 16
    let rowsArr = []

    let cellClass = ""
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cellId = i + "_" + j
            const isAlive = grid[i][j]
            cellClass = isAlive ? "cell alive" : "cell dead"

            rowsArr.push(
                <Cell
                    cellClass={cellClass}
                    key={cellId}
                    cellId={cellId}
                    row={i}
                    col={j}
                    selectCell={selectCell}
                    color={isAlive ? aliveColor : deadColor}
                />
            )
        }
    }

    return (
        <div className="board" style={{width: width}}>
            {rowsArr}
        </div>
    )
}
