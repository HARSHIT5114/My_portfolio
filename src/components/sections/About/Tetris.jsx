import React, { useEffect, useState } from 'react';
import './tetris.css'

const ROWS = 22;
const COLUMNS = 10;

const Tetris = () => {
  const [grid, setGrid] = useState(() => 
    Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => {
        // Create a deep copy of the grid
        const newGrid = prevGrid.map(row => [...row]);

        // Simulate gravity - go from bottom to top
        for (let row = ROWS - 2; row >= 0; row--) {
          for (let col = 0; col < COLUMNS; col++) {
            // If current cell is part of a block and space below is empty
            if (newGrid[row][col] === 1 && newGrid[row + 1][col] === 0) {
              // Find the full height of this block
              let blockHeight = 1;
              while (row - blockHeight >= 0 && newGrid[row - blockHeight][col] === 1) {
                blockHeight++;
              }

              // Move the entire block down
              for (let h = 0; h < blockHeight; h++) {
                newGrid[row + 1 - h][col] = 1;
                newGrid[row - h][col] = 0;
              }
            }
          }
        }

        // Occasionally add new blocks at the top
        if (Math.random() < 0.3) {
          const randomCol = Math.floor(Math.random() * COLUMNS);
          // Ensure we only add if the top row is empty
          if (newGrid[0][randomCol] === 0) {
            newGrid[0][randomCol] = 1;
          }
        }

        // Check and clear full lines
        const clearedLines = newGrid.filter(row => 
          row.some(cell => cell === 0)
        );

        // Pad with empty rows to maintain grid size
        while (clearedLines.length < ROWS) {
          clearedLines.unshift(Array(COLUMNS).fill(0));
        }

        return clearedLines;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tetris-container">
      {grid.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <div 
              key={j} 
              className={`cell ${cell ? 'filled' : ''}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tetris;