import Maze from './maze';
import Position from './position';

export default class MazeSolver {
  private maze: Maze;
  private visitedPositions: Position[];

  constructor(maze: Maze) {
    this.maze = maze;
    this.visitedPositions = [];
  }
  private positionWasVisited(position: Position): boolean {
    const occurrences = this.visitedPositions.filter((pos) => {
      return position.isEqual(pos)
    }).length;
    return occurrences > 0;
  }
  public execute(position: Position): void {
    setTimeout(() => {
      if (this.positionWasVisited(position)) {
        return;
      }
      this.visitedPositions.push(new Position(position.i, position.j));
      if (this.maze.isSolved(position)) {
        console.log('----------------> Maze Solved!! <----------------\n\n');
        console.log(this.maze.toString(position));
        console.log('-------------------------------------------------');
        process.exit();
      }
      console.log('----------------> Solving Maze... <----------------\n\n');
      console.log(this.maze.toString(position));
  
      if (this.maze.positionIsValid(position.moveDown())) {
        this.execute(position.moveDown());
      }
      if (this.maze.positionIsValid(position.moveRight())) {
        this.execute(position.moveRight());
      }
      if (this.maze.positionIsValid(position.moveUp())) {
        this.execute(position.moveUp());
      }
      if (this.maze.positionIsValid(position.moveLeft())) {
        this.execute(position.moveLeft());
      }
    }, 200);
  }
}