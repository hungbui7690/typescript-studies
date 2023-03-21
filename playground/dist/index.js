/*
  Changing Compilation Module System P2
  - imagine if we have 100 of files > we cannot do this
    
  - change tsconfig.json
      "module": "ES2015"
  
  - add type=module in script tag
  - add extension = .js

*/
import { add } from './utils.js';
const result = add(1, 2);
