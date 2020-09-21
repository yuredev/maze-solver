import Position from './position';

interface MazeDTO {
  mazeArray: number[][];
  initialPosition: Position;
  finalPosition: Position;
}

class Maze {
  private mazeArray: number[][];
  private initialPosition: Position;
  private finalPosition: Position;

  constructor({ mazeArray, initialPosition, finalPosition }: MazeDTO) {
    this.mazeArray = mazeArray;
    this.initialPosition = initialPosition;
    this.finalPosition = finalPosition;
  }
  private newPositionIsValid(position: Position, sumI: number, sumJ: number) {
    return this.mazeArray[position.i + sumI][position.j + sumJ] === 0;
  }
  public isFreeBelow(position: Position): boolean {
    return this.newPositionIsValid(position, 1, 0);
  }
  public isFreeInTheRight(position: Position): boolean {
    return this.newPositionIsValid(position, 0, 1);
  }
  public isFreeAbove(position: Position): boolean {
    return this.newPositionIsValid(position, -1, 0);
  }
  public isFreeInTheLeft(position: Position): boolean {
    return this.newPositionIsValid(position, 0, -1);
  }
  public getInitialPosition(): Position {
    return this.initialPosition;
  }
  public getFinalPosition(): Position {
    return this.finalPosition;
  }
  public isSolved(position: Position): boolean {
    return position.i === this.finalPosition.i && 
      position.j === this.finalPosition.j;
  }
  public toString(position: Position): string {
    let result = '';
    let wall = String.fromCharCode(9619);
    wall += wall;
    for (let i = 0; i < this.mazeArray.length; i++) {
      for (let j = 0; j < this.mazeArray[i].length; j++) {
        let current = this.mazeArray[i][j];
        if (i === position.i && j === position.j) {
          result += 'YM';
        } else if (i === this.finalPosition.i && j === this.finalPosition.j) {
          result += '##';
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

export default Maze;