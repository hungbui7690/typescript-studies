import React from 'react'

interface GreeterProps {
  person: string
}

// (***) destructure
const Greeter = ({ person }: GreeterProps): JSX.Element => {
  return <h1>Hello World, {person}</h1>
}

export default Greeter
