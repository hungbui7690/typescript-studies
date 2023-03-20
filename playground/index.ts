/*
  A Bit More On Tuples
  - we should use object for this example 
*/

type HTTPResponse = [number, string]

let res: HTTPResponse = [200, 'OK']
res = [404, 'NOT FOUND']
// res[0] = "OK" // complain

res.push(123) // (***) but the problem appears when we have the correct shape, then we push in > no complain
res.pop()
res.pop()
res.pop()
res.pop()
res.pop()
res.pop() // we also can pop() many times > this is the limitation of tuples

const responses: HTTPResponse[] = [
  [404, 'NOT FOUND'],
  [200, 'OK'],
]
