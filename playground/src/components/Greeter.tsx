import React from 'react'

// (***)
const Greeter = (props: { person: string }): JSX.Element => {
  return <h1>Hello World, {props.person}</h1>
}

export default Greeter
