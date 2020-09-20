import Maze from './models/maze';
import Position from './models/position';
import { maze1Data, maze2Data, maze3Data } from './dummy_mazes_data';

const maze1 = new Maze({
  initialPosition: new Position(1, 1),
  finalPosition: new Position(maze1Data.length - 2, maze1Data.length - 2),
  mazeArray: maze1Data,
});

const maze2 = new Maze({
  initialPosition: new Position(1, 1),
  finalPosition: new Position(maze2Data.length - 2, maze2Data.length - 2),
  mazeArray: maze2Data,
});

const maze3 = new Maze({
  initialPosition: new Position(1, 1),
  finalPosition: new Position(8, 1),
  mazeArray: maze3Data,
});

export { maze1, maze2, maze3 };