"use strict";
/*
  Working With Axios Types P2
  - https://jsonplaceholder.typicode.com/users/1


  - check index.d.ts, we can see that AxiosResponse.data has type of T
      get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?:

      export interface AxiosResponse<T = any, D = any> {
      data: T;
      status: number;
      statusText: string;
      headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
      config: InternalAxiosRequestConfig<D>;
      request?: any;
    }

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// we set the type of T = boolean > hover: we will see the response type = boolean
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
    console.log(res.data);
})
    .catch((e) => console.log(e));
