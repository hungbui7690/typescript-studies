"use strict";
/*
  Working With Axios Types P3
  - https://jsonplaceholder.typicode.com/users/1

  - based on the data, we can create interface

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// T = User
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
    const { data } = res; // now data has type of User
    data.company.catchPhrase; // now, we can get all properties of User
    printUser(data); // (b)
})
    .catch((e) => console.log(e));
// (a)
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
