import { maze1 } from './dummy_mazes_data';
import Maze from './models/maze';
import Position from './models/position';

const maze = new Maze({
  initialPosition: new Position(1, 1),
  finalPosition: new Position(10, 10),
  mazeArray: maze1,
});

const mazeInitialPostition = maze.getInitialPosition();

const initialPosition = new Position(
  mazeInitialPostition.getI(),
  mazeInitialPostition.getJ()
);

const visitedPositions: Array<Position> = [];

search(initialPosition);

function search(position: Position): void {
  console.log(maze.toString(position))
  if (alreadyVisited(position, visitedPositions)) {
    console.log('Já visitou!!!');
    return;
  }
  if (maze.isSolved(position)) {
    console.log('Saída encontrada!!!');
    return;
  } else {
    visitedPositions.push(new Position(position.getI(), position.getJ()));
    search(position.moveDown(maze));
    search(position.moveRight(maze));
    search(position.moveLeft(maze));
    search(position.moveUp(maze));
  }
}

function alreadyVisited(position: Position, positions: Position[]): boolean {
  return positions.filter((pos) => position.isEqual(pos)).length > 0;
}
