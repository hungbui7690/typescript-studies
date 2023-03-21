/*
  Writing Our First Generic P3

*/

// generic type === <Type> === <genericType> === <T>
// can we use any letter or word we want, but the convention is using <T>
function identity<Type>(item: Type): Type {
  return item
}

identity<number>(7)
identity<string>('hello')

///////////////////////////////

interface Cat {
  name: string
  breed: string
}

identity<Cat>({ name: 'Bic', breed: 'English Short Hair' })
