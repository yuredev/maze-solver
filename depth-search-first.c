#include <stdio.h>
#include <stdbool.h>
#include <windows.h>
#include "mazes.h"

struct Position {
  int i;
  int j; 
};

bool isSolved(struct Position position);
void search(struct Position position, int maze[][12]);
struct Position moveDown(struct Position position, int maze[][12]);
struct Position moveRight(struct Position position, int maze[][12]);
struct Position moveUp(struct Position position, int maze[][12]);
struct Position moveLeft(struct Position position, int maze[][12]);

int main() {
  struct Position position;
  struct Position positionsVisited[500];
  position.i = 1;
  position.j = 1;
  printMaze(maze1, 12, 12);
  // search(position, maze1);  
  // printf("Maze Solved");
  return 0;
}

void search(struct Position position, int maze[][12]) {
  if (isSolved(position)) {
    return;
  }
  search(moveDown(position, maze), maze);
  search(moveRight(position, maze), maze);
  search(moveUp(position, maze), maze);
  search(moveLeft(position, maze), maze);
}

struct Position moveDown(struct Position position, int maze[][12]) {
  if (maze[position.i+1][position.j] == 1) {
    return position;
  }
  position.i++;
  return position;
}

struct Position moveRight(struct Position position, int maze[][12]) {
  if (maze[position.i][position.j+1] == 1) {
    return position;
  }
  position.j++;
  return position;
}

struct Position moveUp(struct Position position, int maze[][12]) {
  if (maze[position.i-1][position.j] == 1) {
    return position;
  }
  position.i--;
  return position;
}

struct Position moveLeft(struct Position position, int maze[][12]) {
  if (maze[position.i][position.j-1] == 1) {
    return position;
  }
  position.j--;
  return position;
}

bool isSolved(struct Position position) {
  return position.i == 10 && position.j == 10;
}