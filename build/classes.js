"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Position = void 0;
class Position {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
    getI() {
        return this.i;
    }
    getJ() {
        return this.j;
    }
}
exports.Position = Position;
class State {
    constructor(position, maze) {
        this.position = position;
        this.maze = maze;
    }
    getPosition() {
        return this.position;
    }
    getMaze() {
        return this.maze;
    }
}
exports.State = State;
