"use strict";
/*
  Working With Axios Types P4
  - now, we will get list of Users
    > https://jsonplaceholder.typicode.com/users

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// T = User[]
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
    const { data } = res;
    data.forEach(printUser); // (***)
})
    .catch((e) => console.log(e));
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log('***********');
}
