import Maze from './maze';

export default class Position {
  private _i: number;
  private _j: number;
  constructor(i: number, j: number) {
    this._i = i;
    this._j = j;
  }
  private movePosition(sumI: number, sumJ: number): Position {
    return new Position(this.i + sumI, this.j + sumJ);
  }
  public get i(): number {
    return this._i;
  }
  public get j(): number {
    return this._j;
  }
  public isEqual(position: Position) {
    return this.i === position.i && this.j === position.j;
  }
  public moveDown(maze: Maze): Position {
    return maze.isFreeBelow(this) ? this.movePosition(1, 0) : this;
  }
  public moveRight(maze: Maze): Position {
    return maze.isFreeInTheRight(this) ? this.movePosition(0, 1) : this;
  }
  public moveUp(maze: Maze): Position {
    return maze.isFreeAbove(this) ? this.movePosition(-1, 0) : this;
  }
  public moveLeft(maze: Maze): Position {
    return maze.isFreeInTheLeft(this) ? this.movePosition(0, -1) : this;
  }
}
