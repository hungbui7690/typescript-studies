/*
  Working With Axios Types P1
  - https://jsonplaceholder.typicode.com/users/1
*/

import axios from 'axios'

// hover > we can see that this method return a promise
axios
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    console.log(res.data)
  })
  .catch((e) => console.log(e))
