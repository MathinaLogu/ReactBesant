// import React, { useState } from 'react'

// export default function FunctionalComponents() {
//     const[count,setCount]=useState(0);

// const increment = () => {
//     setCount(count+1)
// }

// const decrement = () => {
//     setCount(count-1)
// }
    
//   return (
//     <div>
//       <h1>{count}</h1>
//       {/* <button onClick={()=> setCount(count+1)}>increment</button> */}
// <button onClick={increment}>Increment</button>
// <button onClick={decrement}>Decrement</button>

//     </div>
//   )
// }


import React, { Component } from 'react'

export default class ClassComponents extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

increment (){
  this.setState ({
    count : this.state.count+1
  })
}

decrement (){
  this.setState ({
    count : this.state.count-1
  })
}


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>Incre</button>
        <button onClick={() => this.decrement()}>Decre</button>

      </div>
    )
  }
}
