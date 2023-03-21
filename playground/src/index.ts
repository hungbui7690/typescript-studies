/*
  Instanceof Narrowing P2

*/

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity
  } else {
    entity
  }
}
