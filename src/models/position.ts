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
  private movePosition(maze: Maze, sumI: number, sumJ: number): Position | null {
    if (maze.getArray()[this.getI() + sumI][this.getJ() + sumJ] === 0) {
      const newPositionCordenates = {
        i: this.i + sumI,
        j: this.j + sumJ,
      };
      return new Position(newPositionCordenates.i, newPositionCordenates.j);
    }
    return null;
  } 
  public moveDown(maze: Maze): Position | null {
    return this.movePosition(maze, 1, 0);
  }
  public moveRight(maze: Maze): Position | null {
    return this.movePosition(maze, 0, 1);
  }
  public moveUp(maze: Maze): Position | null {
    return this.movePosition(maze, -1, 0);
  }
  public moveLeft(maze: Maze): Position | null {
    return this.movePosition(maze, 0, -1);
  }
}
