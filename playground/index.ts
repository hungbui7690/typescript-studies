/*
  The readonly Modifier  
  - in this case > id is number > primitive type 
  - if the field is object > we still can change the value inside that object > ref type 
  

*/

type User = {
  readonly id: number // (***) this field is read-only
  username: string
}

const user: User = {
  id: 12845,
  username: 'Bic',
}

console.log(user.id) // still can read
user.id = 123 // cannot change
