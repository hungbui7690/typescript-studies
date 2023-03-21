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

import axios from 'axios'

// we set the type of T = boolean > hover: we will see the response type = boolean
axios
  .get<boolean>('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    console.log(res.data)
  })
  .catch((e) => console.log(e))
