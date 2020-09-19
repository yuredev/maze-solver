"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const mazes_1 = require("./mazes");
const initialPosition = new classes_1.Position(1, 1);
const state = new classes_1.State(initialPosition, mazes_1.maze1);
const positionsVisited = [];
mazes_1.printMaze(mazes_1.maze1);
