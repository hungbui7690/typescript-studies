/*
  Import/Export Syntax In Depth
  - currently, we are using named export
  - create User.ts 
    > if we have only 1 thing to export > default export

*/

import { add } from './utils.js'

// (***)
import User, { userHelper } from './User.js'

const result = add(1, 2)
