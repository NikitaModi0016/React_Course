import React from 'react'

function Register() {
  function handleRegister(event){
    event.preventDefault();//it does not let screen to reload.
    console.log('Hello');
  }
  let age=19;
  let name='Modi';
  
  return (
    <form>
      
      {age>18 && name==='Modi'? (
        <div>
        <h1>You are eligible</h1>
        <input type="email" placeholder='Enter your email'/>
        <button onClick={handleRegister}>Submit</button>
        </div>
      ): <h1>You are not eligible</h1>}
      
      
    </form>
  )
}

export default Register