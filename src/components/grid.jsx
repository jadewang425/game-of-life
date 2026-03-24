
const Cell = (props) => {
    const { cellClass, cellId, row, col, selectCell } = props

    return (
        <div className={cellClass} id={cellId} onClick={() => selectCell(row, col)}></div>
    )
}

export default function Grid (props) {
    const { grid, rows, cols, selectCell } = props
    const width = cols * 16
    let rowsArr = []

    let cellClass = ""
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cellId = i + "_" + j
            cellClass = grid[i][j] ? "cell alive" : "cell dead"

            rowsArr.push(
                <Cell 
                    cellClass={cellClass}
                    key={cellId}
                    cellId={cellId}
                    row={i}
                    col={j}
                    selectCell={selectCell}
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