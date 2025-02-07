import React from 'react'
import { Child2 } from './Child2'

export const Child1 = (props) => {
  return (
    <div>Child1
        <Child2 Name={props.Name}/>
    </div>
  )
}
