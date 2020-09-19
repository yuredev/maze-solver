import Position from './position';

interface MazeDTO {
  mazeArray: number[][];
  initialPosition: Position;
  finalPosition: Position;
}

export default class Maze {
  private mazeArray: number[][];
  private initialPosition: Position;
  private finalPosition: Position;

  constructor({ mazeArray, initialPosition, finalPosition }: MazeDTO) {
    this.mazeArray = mazeArray;
    this.initialPosition = initialPosition;
    this.finalPosition = finalPosition;
  }
  public getInitialPosition(): Position {
    return this.initialPosition;
  }
  public getFinalPosition(): Position {
    return this.finalPosition;
  }
  public isSolved(position: Position): boolean {
    return position.getI() === this.finalPosition.getI() && 
      position.getJ() === this.finalPosition.getJ();
  }
  public getArray(): number[][] {
    return this.mazeArray;
  }
  public toString(position: Position): string {
    let result = '';
    let wall = String.fromCharCode(9619);
    wall += wall;
    for (let i = 0; i < this.mazeArray.length; i++) {
      for (let j = 0; j < this.mazeArray[i].length; j++) {
        let current = this.mazeArray[i][j];
        if (i === position.getI() && j === position.getJ()) {
          result += 'YM';
        } else if (current == 0) {
          result += '  ';
        } else if (current == 1) {
          result += wall;
        }
      }
      result += '\n';
    }
    return result;
  }
}
