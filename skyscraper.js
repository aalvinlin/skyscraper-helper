// input: a string of length 1 (a single numeral)
const highlightAvailableCellsForDigit = n => {
    
    // first highlight every cell (that is not already filled) in the grid
    for (let row = 0; row < 9; row += 1)
        {
            for (let col = 0; col < 9; col += 1)
                {                
                    const cell = document.getElementById(`cell_${row}_${col}`);

                    // only add a highlight if the cell doesn't already contain a number
                    if (cell.textContent === "")
                        { cell.classList.add("highlight"); }
                }
        }

    // if a cell contains the specified digit in its row or column, turn off the highlight
    for (let row = 0; row < 9; row += 1)
        {
            for (let col = 0; col < 9; col += 1)
                {   
                    const cell = document.getElementById(`cell_${row}_${col}`);

                    if (cell.textContent === n)
                        {
                            // remove highlight from all cells in row
                            for (let currentCol = 0; currentCol < 9; currentCol += 1)
                                {
                                    const currentCellInRow = document.getElementById(`cell_${row}_${currentCol}`);
                                    currentCellInRow.classList.remove("highlight");
                                }

                            // remove highlight from all cells in column
                            for (let currentRow = 0; currentRow < 9; currentRow += 1)
                                {
                                    const currentCellInCol = document.getElementById(`cell_${currentRow}_${col}`);
                                    currentCellInCol.classList.remove("highlight");
                                }
                        }
                }
        }
}