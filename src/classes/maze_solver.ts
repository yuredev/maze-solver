/**
 * @author Yure Matias <http://github.com/yuredev>
 */

import Maze from './maze';
import Position from './position';

export default class MazeSolver {
  private maze: Maze;
  private visitedPositions: Position[];
  private _travel: Position[];

  constructor(maze: Maze) {
    this.maze = maze;
    this.visitedPositions = [];
    this._travel = [];
  }
  private positionWasVisited(position: Position): boolean {
    const occurrences = this.visitedPositions.filter((pos) => {
      return position.isEqual(pos);
    }).length;
    return occurrences > 0;
  }
  public get travel(): Position[] {
    return this._travel;
  }
  public execute(position: Position): boolean {
    if (this.positionWasVisited(position)) {
      return false;
    }
    this.visitedPositions.push(position);
    this._travel.push(position);
    if (this.maze.isSolved(position)) {
      return true;
    }
    let solved = false;
    if (this.maze.itsNotWall(position.moveDown())) {
      solved = this.execute(position.moveDown()) || solved;
    }
    if (this.maze.itsNotWall(position.moveRight())) {
      solved = this.execute(position.moveRight()) || solved;
    }
    if (this.maze.itsNotWall(position.moveLeft())) {
      solved = this.execute(position.moveLeft()) || solved;;
    }
    if (this.maze.itsNotWall(position.moveUp())) {
      solved = this.execute(position.moveUp()) || solved; 
    }
    if (solved) {
      return true;
    }
    this._travel.pop();
    return false;
  }
}
