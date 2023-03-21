import React from 'react'

// (***)
interface GreeterProps {
  person: string
}

// (***)
const Greeter = (props: GreeterProps): JSX.Element => {
  return <h1>Hello World, {props.person}</h1>
}

export default Greeter
