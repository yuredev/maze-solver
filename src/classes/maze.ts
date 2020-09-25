/**
 * @author Yure Matias <http://github.com/yuredev>
 */

import Position from './position';

/**
 * A Class that represents a maze that can be solved
 */
class Maze {
  private mazeMatrix: number[][];
  private _finalPosition: Position;
  /**
   * The Default constructor of the Maze class
   * @param mazeMatrix A matrix of 0 and 1 that representes 
   * the walls and the free positions of the maze
   * @param _finalPosition The end of the maze 
   */
  constructor(
    mazeMatrix: number[][],
    _finalPosition: Position = new Position(
      mazeMatrix.length - 2,
      mazeMatrix[0].length - 2
    )
  ) {
    this.mazeMatrix = mazeMatrix;
    this._finalPosition = _finalPosition;
  }
  /**
   * Verify if the position is not a wall and it is valid
   * @param position The position to be verified
   * @returns A boolean value that tells if the position is valid
   */
  public itsNotWall(position: Position): boolean {
    return this.mazeMatrix[position.i][position.j] === 0;
  }
  /**
   * Verify if the maze is solved
   * @param position The position to be verified
   * @returns A boolean value that tells if the maze is solved
   */
  public get finalPosition(): Position {
    return this._finalPosition;
  }
  private isPartOfTravel(position: Position, travel: Position[]): boolean {
    return travel.filter(p => {
      return p.isEqual(position);
    }).length > 0;
  }
  public isSolved(position: Position): boolean {
    return position.isEqual(this.finalPosition);
  }
  /**
   * Mount the representation of the maze in a String and returns
   * @param position The current position to be printed with the maze
   * @returns A string representation of the maze 
   */
  public toString(travel: Position[]): string {
    let result = '';
    const wall = String.fromCharCode(9619);
    for (let i = 0; i < this.mazeMatrix.length; i++) {
      for (let j = 0; j < this.mazeMatrix[i].length; j++) {
        if (this._finalPosition.moveDown().isEqual(new Position(i, j))) {
          result += '##';
        } else if (this.isPartOfTravel(new Position(i, j), travel)) {
          result += '* ';
        } else if (this.mazeMatrix[i][j] == 0) {
          result += '  ';
        } else if (this.mazeMatrix[i][j] == 1) {
          result += wall + wall;
        }
      }
      result += '\n';
    }
    return result;
  }
}

export default Maze;
