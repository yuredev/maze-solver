import Maze from './maze';
import Position from './position';

export default class MazeSolver {
  private maze: Maze;
  private visitedPositions: Position[];
  private travel: Position[];
  private mazeIsSolved: boolean;

  constructor(maze: Maze) {
    this.maze = maze;
    this.visitedPositions = [];
    this.travel = [];
    this.mazeIsSolved = false;
  }
  private positionWasVisited(position: Position): boolean {
    const occurrences = this.visitedPositions.filter((pos) => {
      return position.isEqual(pos);
    }).length;
    return occurrences > 0;
  }
  public getResult(): Position[] {
    if (!this.mazeIsSolved) {
      throw new Error('Getting Result Before Solving the Maze');
    }
    return this.travel;
  }
  public execute(position: Position): boolean {
    if (this.positionWasVisited(position)) {
      return false;
    }
    this.visitedPositions.push(position);
    this.travel.push(position);
    if (this.maze.isSolved(position)) {
      this.mazeIsSolved = true;
      return true;
    }
    let solved = false;
    if (this.maze.itsNotWall(position.moveDown())) {
      solved = this.execute(position.moveDown()) || solved;
    }
    if (this.maze.itsNotWall(position.moveRight())) {
      solved = this.execute(position.moveRight()) || solved;
    }
    if (this.maze.itsNotWall(position.moveUp())) {
      solved = this.execute(position.moveUp()) || solved; 
    }
    if (this.maze.itsNotWall(position.moveLeft())) {
      solved = this.execute(position.moveLeft()) || solved;;
    }
    if (solved) {
      return true;
    }
    this.travel.pop();
    return false;
  }
}
