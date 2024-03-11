import React from 'react'

// function About(props) {

//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.description}</h2>
//       <h3>${props.price}</h3>
//     </div>
//   )
// } instead od this we can use below code to optimize out code and to destructure it.
function About({name,description,price}) {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>${price}</h3>
    </div>
  )
}


export default About