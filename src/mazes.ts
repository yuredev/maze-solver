import Maze from './classes/maze';
import Position from './classes/position';
import path from 'path';
import { fileToMatrix } from './utils';

const maze1Data = fileToMatrix(path.resolve('data', 'maze_1.txt'));
const maze2Data = fileToMatrix(path.resolve('data', 'maze_2.txt'));
const maze3Data = fileToMatrix(path.resolve('data', 'maze_3.txt'));
const maze4Data = fileToMatrix(path.resolve('data', 'maze_4.txt'));
const maze5Data = fileToMatrix(path.resolve('data', 'maze_5.txt'));

const maze1 = new Maze(maze1Data);
const maze2 = new Maze(maze2Data);
const maze3 = new Maze(maze3Data, new Position(8, 1));
const maze4 = new Maze(maze4Data);
const maze5 = new Maze(maze5Data);

export { maze1, maze2, maze3, maze4, maze5 };
