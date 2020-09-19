"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maze1 = exports.printMaze = void 0;
function printMaze(maze) {
    let wall = String.fromCharCode(9619);
    wall += wall;
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            let current = maze[i][j];
            if (current == 0) {
                process.stdout.write('  ');
            }
            else if (current == 1) {
                process.stdout.write(wall);
            }
        }
        process.stdout.write("\n");
    }
}
exports.printMaze = printMaze;
const maze1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
exports.maze1 = maze1;
