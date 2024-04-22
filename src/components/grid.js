
const Cell = (props) => {
    const { cellClass, key } = props
    return (
        <div className={cellClass} id={key}></div>
    )
}

export default function Grid (props) {
    const { grid, rows, cols } = props
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