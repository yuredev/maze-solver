import { maze1, maze2, maze3 } from './mazes';
import search from './search';
import Position from './models/position';

const initialPosition = new Position(1,1);

search(initialPosition, maze3);