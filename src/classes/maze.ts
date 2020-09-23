/**
 * @author Yure Matias <http://github.com/yuredev>
 */

import Position from './position';

/**
 * A Class that represents a maze that can be solved
 */
class Maze {
  private mazeMatrix: number[][];
  private finalPosition: Position;
  /**
   * The Default constructor of the Maze class
   * @param mazeMatrix A matrix of 0 and 1 that representes 
   * the walls and the free positions of the maze
   * @param finalPosition The end of the maze 
   */
  constructor(
    mazeMatrix: number[][],
    finalPosition: Position = new Position(
      mazeMatrix.length - 2,
      mazeMatrix.length - 2
    )
  ) {
    this.mazeMatrix = mazeMatrix;
    this.finalPosition = finalPosition;
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
  public isSolved(position: Position): boolean {
    return position.isEqual(this.finalPosition);
  }
  /**
   * Mount the representation of the maze in a String and returns
   * @param position The current position to be printed with the maze
   * @returns A string representation of the maze 
   */
  public toString(position: Position): string {
    let result = '';
    let wall = String.fromCharCode(9619);
    wall += wall;
    for (let i = 0; i < this.mazeMatrix.length; i++) {
      for (let j = 0; j < this.mazeMatrix[i].length; j++) {
        let current = this.mazeMatrix[i][j];
        if (i === position.i && j === position.j) {
          result += '><';
        } else if (this.finalPosition.moveDown().isEqual(new Position(i, j))) {
          result += '$$';
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
