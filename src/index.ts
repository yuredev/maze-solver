import { maze1Data, maze2Data } from './dummy_mazes_data';
import Maze from './models/maze';
import Position from './models/position';

const maze1 = new Maze({
  initialPosition: new Position(1, 1),
  finalPosition: new Position(maze1Data.length - 2, maze1Data.length - 2),
  mazeArray: maze1Data,
});

const initialPosition1 = new Position(
  maze1.getInitialPosition().getI(),
  maze1.getInitialPosition().getJ()
);

const maze2 = new Maze({
  initialPosition: new Position(1, 1),
  finalPosition: new Position(maze2Data.length - 2, maze2Data.length - 2),
  mazeArray: maze2Data,
});

const initialPosition2 = new Position(
  maze2.getInitialPosition().getI(),
  maze2.getInitialPosition().getJ()
);

const visitedPositions: Array<Position> = [];

search(initialPosition2, maze2);

function search(position: Position, maze: Maze): void {
  setTimeout(() => {
    console.clear();
    console.log('----------------> Solving Maze... <----------------\n\n');
    console.log(maze.toString(position));
    if (positionWasVisited(position, visitedPositions)) {
      return false;
    }
    visitedPositions.push(new Position(position.getI(), position.getJ()));
    if (maze.isSolved(position)) {
      console.clear();
      console.log('----------------> Maze Solved!! <----------------\n\n');
      console.log(maze.toString(position));
      process.exit();
    }
    if (position.isFreeBelow(maze)) {
      search(position.moveDown(maze), maze);
    }
    if (position.isFreeInTheRight(maze)) {
      search(position.moveRight(maze), maze);
    }
    if (position.isFreeAbove(maze)) {
      search(position.moveUp(maze), maze);
    }
    if (position.isFreeInTheLeft(maze)) {
      search(position.moveLeft(maze), maze);
    }
  }, 400);
}

function positionWasVisited(
  position: Position,
  positions: Position[]
): boolean {
  return positions.filter((pos) => position.isEqual(pos)).length > 0;
}
