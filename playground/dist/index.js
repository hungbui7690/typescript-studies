"use strict";
/*
  Installing Types Separately P2
  - https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html
    > npm install --save-dev @types/lodash

  - @types > from DefinitelyTyped Project > contains many types for most of the popular libraries
    > https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types


*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// hover
const lodash_1 = __importDefault(require("lodash"));
lodash_1.default.shuffle([45, 3, 4, 656, 23]); // test with .sample(), .partition()... > hover
