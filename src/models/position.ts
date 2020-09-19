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
  public moveDown(maze: Maze): Position {
    if (maze.getArray()[this.getI() + 1][this.getJ()] === 0) {
      this.i++;
    }
    return this;
  }
  public isEqual(position: Position) {
    return this.i === position.getI() && this.j === position.getJ();
  } 
  public moveRight(maze: Maze) {
    if (maze.getArray()[this.getI()][this.getJ() + 1] === 0) {
      this.j++;
    }
    return this;
  }
  public moveUp(maze: Maze) {
    if (maze.getArray()[this.getI() - 1][this.getJ()] === 0) {
      this.i--;
    }
    return this;
  }
  public moveLeft(maze: Maze) {
    if (maze.getArray()[this.getI()][this.getJ() - 1] === 0) {
      this.j--;
    }
    return this;
  }
}