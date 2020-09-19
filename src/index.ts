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
  visitedPositions.push(new Position(position.getI(), position.getJ()));
  console.clear();
  console.log(maze.toString(position));
  if (maze.isSolved(position)) {
    console.log('Saída encontrada!!!');
    return;
  }
  const nextPosition = getNextPosition(position, maze);
  setTimeout(() => {
    if (nextPosition) {
      search(nextPosition);
    } 
    else {
      visitedPositions.pop();
      const previousPosition = visitedPositions.pop();
      if (previousPosition) {
        search(previousPosition);
      }
    }
  }, 150);
}

function alreadyVisited(position: Position, positions: Position[]): boolean {
  return positions.filter((pos) => position.isEqual(pos)).length > 0;
}

function getNextPosition(position: Position, maze: Maze): Position | null {
  let nextPosition = position.moveDown(maze);
  if (nextPosition && !alreadyVisited(nextPosition, visitedPositions)) {
    return nextPosition;
  }
  nextPosition = position.moveRight(maze);
  if (nextPosition && !alreadyVisited(nextPosition, visitedPositions)) {
    return nextPosition;
  }
  nextPosition = position.moveUp(maze);
  if (nextPosition && !alreadyVisited(nextPosition, visitedPositions)) {
    return nextPosition;
  }
  nextPosition = position.moveLeft(maze);
  if (nextPosition && !alreadyVisited(nextPosition, visitedPositions)) {
    return nextPosition;
  }
  return null;
}
