/*
  Importing Types P2
  - use import type {xx} in User.ts
    > safer way 
    > just use if we know that file just only have TS things

*/

import { add } from './utils.js'

import User, { userHelper } from './User.js'

const result = add(1, 2)
