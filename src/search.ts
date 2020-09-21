import Maze from './models/maze';
import Position from './models/position';

const visitedPositions: Array<Position> = [];

function search(position: Position, maze: Maze): void {
  setTimeout(() => {
    if (positionWasVisited(position, visitedPositions)) {
      return;
    }
    visitedPositions.push(new Position(position.i, position.j));
    if (maze.isSolved(position)) {
      console.log('----------------> Maze Solved!! <----------------\n\n');
      console.log(maze.toString(position));
      console.log('-------------------------------------------------');
      process.exit();
    }
    console.log('----------------> Solving Maze... <----------------\n\n');
    console.log(maze.toString(position));

    search(position.moveDown(maze), maze);
    search(position.moveRight(maze), maze);
    search(position.moveUp(maze), maze);
    search(position.moveLeft(maze), maze);
  }, 200);
}

function positionWasVisited(
  position: Position,
  positions: Position[]
): boolean {
  return positions.filter((pos) => position.isEqual(pos)).length > 0;
}

export default search;
