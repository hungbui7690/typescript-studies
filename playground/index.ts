/*
  Interfaces Vs Type Aliases
  - pic
  - they both describe the object type

  - Interface: 
    + can reopen to add properties 
    + can extends 
    + must be object 
        interface X = {}

  - Type Alias
    + interface cannot do this, since it must be object > type alias can use for multiple things
        type X = "red" | "green"
    + cannot reopen
    + cannot use extends > need to use intersection
  
  (***) object: use interface > other things: use type alias
*/

/////////////////////////////////////////
type Color = 'red' | 'green' | 'blue'

type Name = {
  name: string
}

type Person = Name & {
  age: number
}
