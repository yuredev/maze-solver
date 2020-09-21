import Position from './position';

class Maze {
  private mazeArray: number[][];
  private finalPosition: Position;

  constructor(
    mazeArray: number[][],
    finalPosition: Position = new Position(
      mazeArray.length - 2,
      mazeArray.length - 2
    )
  ) {
    this.mazeArray = mazeArray;
    this.finalPosition = finalPosition;
  }
  public positionIsValid(position: Position): boolean {
    return this.mazeArray[position.i][position.j] === 0;
  }
  public isSolved(position: Position): boolean {
    return position.isEqual(this.finalPosition);
  }
  public toString(position: Position): string {
    let result = '';
    let wall = String.fromCharCode(9619);
    wall += wall;
    for (let i = 0; i < this.mazeArray.length; i++) {
      for (let j = 0; j < this.mazeArray[i].length; j++) {
        let current = this.mazeArray[i][j];
        if (i === position.i && j === position.j) {
          result += '><';
        } else if (this.finalPosition.isEqual(new Position(i, j))) {
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
