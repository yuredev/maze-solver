import { maze1, maze2, maze3, maze4 } from './mazes';
import MazeSolver from './classes/maze_solver';
import Position from './classes/position';
const initialPosition = new Position(1,1);

const mazeSolver = new MazeSolver(maze3);

mazeSolver.execute(initialPosition);
