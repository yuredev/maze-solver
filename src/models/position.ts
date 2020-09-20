import Maze from './maze';

export default class Position {
  private i: number;
  private j: number;
  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }
  private isFreeBelow(maze: Maze): boolean {
    return this.newPositionIsValid(maze, 1, 0);
  }
  private isFreeInTheRight(maze: Maze): boolean {
    return this.newPositionIsValid(maze, 0, 1);
  }
  private isFreeAbove(maze: Maze): boolean {
    return this.newPositionIsValid(maze, -1, 0);
  }
  private isFreeInTheLeft(maze: Maze): boolean {
    return this.newPositionIsValid(maze, 0, -1);
  }
  private newPositionIsValid(maze: Maze, sumI: number, sumJ: number) {
    return maze.getArray()[this.getI() + sumI][this.getJ() + sumJ] === 0;
  }
  private movePosition(sumI: number, sumJ: number): Position {
    return new Position(this.i + sumI, this.j + sumJ);
  }
  public getI(): number {
    return this.i;
  }
  public getJ(): number {
    return this.j;
  }
  public isEqual(position: Position) {
    return this.i === position.getI() && this.j === position.getJ();
  }
  public moveDown(maze: Maze): Position {
    return this.isFreeBelow(maze) ? this.movePosition(1, 0) : this;
  }
  public moveRight(maze: Maze): Position {
    return this.isFreeInTheRight(maze) ? this.movePosition(0, 1) : this;
  }
  public moveUp(maze: Maze): Position {
    return this.isFreeAbove(maze) ? this.movePosition(-1, 0) : this;
  }
  public moveLeft(maze: Maze): Position {
    return this.isFreeInTheLeft(maze) ? this.movePosition(0, -1) : this;
  }
}
