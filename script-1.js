/**
 * Interactive Maze Generator 
 * 
 * Author: Vishnu Marwadi
 * Date Created: [20th november]
 * 
 * Description:
 * This script provides functionality for generating an interactive maze,
 * allowing users to toggle walls, reset the maze, and tracks the score.
 */
let score = 0;
/**
 * Generates the maze based on user actions.
 */
function generateMaze() {
    const mazeContainer = document.getElementById('mazeContainer');
    const scoreElement = document.getElementById('score');

    // Clear previous maze and reset score
    mazeContainer.innerHTML = '';
    score = 0;
    scoreElement.innerText = score;

    // Customize the maze dimensions
    const rows = 10;
    const cols = 10;

    // Generate maze cells
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            cell.setAttribute('x', j * 40); // Adjust cell width
            cell.setAttribute('y', i * 40); // Adjust cell height
            cell.setAttribute('width', '40');
            cell.setAttribute('height', '40');
            cell.setAttribute('fill', 'white');
            cell.setAttribute('stroke', 'black');
            cell.setAttribute('onclick', 'toggleWall(this)');
            cell.setAttribute('onmouseover', 'highlightCell(this)');
            cell.setAttribute('onmouseout', 'unhighlightCell(this)');
            mazeContainer.appendChild(cell);
        }
    }
}
/**
 * Toggles between wall and open path, updates the score.
 * 
 * @param {Element} cell - SVG rectangle representing a maze cell.
 */
function toggleWall(cell) {
    // Toggle between wall and open path
    const currentFill = cell.getAttribute('fill');
    cell.setAttribute('fill', currentFill === 'black' ? 'white' : 'black');

    // Update score based on the action
    score += currentFill === 'black' ? -1 : 1;
    document.getElementById('score').innerText = score;
}
/**
 * Resets the maze, clearing all elements and resetting the score.
 */
function resetMaze() {
    const mazeContainer = document.getElementById('mazeContainer');
    const scoreElement = document.getElementById('score');

    // Clear maze and reset score
    mazeContainer.innerHTML = '';
    score = 0;
    scoreElement.innerText = score;
}

function highlightCell(cell) {
    cell.setAttribute('stroke', 'blue');
}
/**
 * Reverts the highlight of a maze cell on mouseout.
 * 
 * @param {Element} cell - SVG rectangle representing a maze cell.
 */
function unhighlightCell(cell) {
    cell.setAttribute('stroke', 'black');
}
