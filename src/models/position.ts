import Maze from './maze';

export default class Position {
  private i: number;
  private j: number;
  constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
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
  private movePosition(sumI: number, sumJ: number): Position {
    return new Position(this.i + sumI, this.j + sumJ);
  }
  private newPositionIsValid(maze: Maze, sumI: number, sumJ: number) {
    return maze.getArray()[this.getI() + sumI][this.getJ() + sumJ] === 0;
  }
  public moveDown(maze: Maze): Position {
    return this.movePosition(1, 0);
  }
  public isFreeBelow(maze: Maze): boolean {
    return this.newPositionIsValid(maze, 1, 0);
  }
  public moveRight(maze: Maze): Position {
    return this.movePosition(0, 1);
  }
  public isFreeInTheRight(maze: Maze): boolean {
    return this.newPositionIsValid(maze, 0, 1);
  }
  public moveUp(maze: Maze): Position {
    return this.movePosition(-1, 0);
  }
  public isFreeAbove(maze: Maze): boolean {
    return this.newPositionIsValid(maze, -1, 0);
  }
  public moveLeft(maze: Maze): Position {
    return this.movePosition(0, -1);
  }
  public isFreeInTheLeft(maze: Maze): boolean {
    return this.newPositionIsValid(maze, 0, -1);
  }
}
