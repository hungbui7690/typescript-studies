"use strict";
/*
  Working With Axios Types P1
  - https://jsonplaceholder.typicode.com/users/1
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// hover > we can see that this method return a promise
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
    console.log(res.data);
})
    .catch((e) => console.log(e));
