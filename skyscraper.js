const tallestBuildingHeight = 9;

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

    n = parseInt(n);
    const totalBuildingsOfHeightNOrMore = tallestBuildingHeight - parseInt(n) + 1;
    
    // remove highlights from cells where a tall building is too close to the edge

    // check clues along the top and bottom edges
    for (let col = 0; col < 9; col += 1)
        {
            // start from the top edge
            let clueTopValue = document.getElementById(`clueTop_${col}`).textContent;

            if (!isNaN(clueTopValue))
                { clueTopValue = parseInt(clueTopValue); }
            
            const minSquaresFromTopEdge = clueTopValue - totalBuildingsOfHeightNOrMore;

            if (minSquaresFromTopEdge > 0)
                {
                    for (let row = 0; row < minSquaresFromTopEdge; row += 1)
                        {
                            const currentCell = document.getElementById(`cell_${row}_${col}`);
                            currentCell.classList.remove("highlight");
                        }
                }

            // repeat for the bottom edge
            let clueBottomValue = document.getElementById(`clueBottom_${col}`).textContent;

            if (!isNaN(clueBottomValue))
                { clueBottomValue = parseInt(clueBottomValue); }
            
            const minSquaresFromBottomEdge = clueBottomValue - totalBuildingsOfHeightNOrMore;

            if (minSquaresFromBottomEdge > 0)
                {
                    for (let row = 8; row > 8 - minSquaresFromBottomEdge; row -= 1)
                        {
                            const currentCell = document.getElementById(`cell_${row}_${col}`);
                            currentCell.classList.remove("highlight");
                        }
                }
        }

    // check clues along the left and right edges
    for (let row = 0; row < 9; row += 1)
        {
            // start from the left edge
            let clueLeftValue = document.getElementById(`clueLeft_${row}`).textContent;

            if (!isNaN(clueLeftValue))
                { clueLeftValue = parseInt(clueLeftValue); }
            
            const minSquaresFromLeftEdge = clueLeftValue - totalBuildingsOfHeightNOrMore;

            if (minSquaresFromLeftEdge > 0)
                {
                    for (let col = 0; col < minSquaresFromLeftEdge; col += 1)
                        {
                            const currentCell = document.getElementById(`cell_${row}_${col}`);
                            currentCell.classList.remove("highlight");
                        }
                }

            // repeat for the right edge
            let clueRightValue = document.getElementById(`clueRight_${row}`).textContent;

            if (!isNaN(clueRightValue))
                { clueRightValue = parseInt(clueRightValue); }
            
            const minSquaresFromRightEdge = clueRightValue - totalBuildingsOfHeightNOrMore;

            if (minSquaresFromRightEdge > 0)
                {
                    for (let col = 8; col > 8 - minSquaresFromRightEdge; col -= 1)
                        {
                            const currentCell = document.getElementById(`cell_${row}_${col}`);
                            currentCell.classList.remove("highlight");
                        }
                }
        }

}

const setCellValue = node => {
    const response = prompt("New cell value?");
    node.textContent = response;
}