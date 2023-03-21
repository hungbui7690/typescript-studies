/*
  Installing Types Separately P2
  - https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html
    > npm install --save-dev @types/lodash

  - @types > from DefinitelyTyped Project > contains many types for most of the popular libraries
    > https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types


*/

// hover
import _ from 'lodash'

_.shuffle([45, 3, 4, 656, 23]) // test with .sample(), .partition()... > hover
