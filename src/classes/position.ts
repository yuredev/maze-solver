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
  public moveDown(): Position {
    return this.movePosition(1, 0);
  }
  public moveRight(): Position {
    return this.movePosition(0, 1);
  }
  public moveUp(): Position {
    return this.movePosition(-1, 0);
  }
  public moveLeft(): Position {
    return this.movePosition(0, -1);
  }
}
