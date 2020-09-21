import { maze1, maze2, maze3, maze4 } from './mazes';
import MazeSolver from './classes/maze_solver';
import Position from './classes/position';

const initialPosition = new Position(1,1);

const solver = new MazeSolver(maze1);

solver.execute(initialPosition);
