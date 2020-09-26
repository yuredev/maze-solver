/**
 * @author Yure Matias <http://github.com/yuredev>
 */

import Maze from './classes/maze';
import MazeSolver from './classes/maze_solver';
import { resolve } from 'path';
import { fileToMatrix, printResult } from './utils';

const rand = Math.trunc(Math.random() * 9 + 1);

// if the argv was not passed,
// the maze path will be one of the .txt path
// of mazes_data folder
const path = process.argv[2]
  ? resolve(process.argv[2])
  : resolve('mazes_data', `maze_${rand}.txt`);

const mazeMatrix = fileToMatrix(path);
const maze = new Maze(mazeMatrix);
const mazeSolver = new MazeSolver(maze);

const result = mazeSolver.execute();

result
  ? printResult(maze, mazeSolver.travel)
  : console.log('Saída não encontrada');
