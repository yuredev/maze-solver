import Maze from './models/maze';
import Position from './models/position';

const visitedPositions: Array<Position> = [];

function search(position: Position, maze: Maze): void {
  setTimeout(() => {
    if (positionWasVisited(position, visitedPositions)) {
      return;
    }
    visitedPositions.push(new Position(position.getI(), position.getJ()));
    // console.clear();
    console.log('----------------> Solving Maze... <----------------\n\n');
    console.log(maze.toString(position));

    if (maze.isSolved(position)) {
      // console.clear();
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
  }, 500);
}

function positionWasVisited(
  position: Position,
  positions: Position[]
): boolean {
  return positions.filter((pos) => position.isEqual(pos)).length > 0;
}

export default search;