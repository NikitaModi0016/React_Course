import React,{useEffect, useState} from 'react'

function Register() {
  function handleRegister(event){
    event.preventDefault();//it does not let screen to reload.
    console.log('Hello');
  }
  let age=19;
  let name='Modi';
  //useState
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [id,setId]=useState(13);
  function increaseId(event){
    event.preventDefault();
    setId(id+1);
  }
  
  useEffect(()=>{
    console.log("id:");
  },[id])//dependency array: we provide this with variables or any variable that are changing in nature, hit a re-render.
  return (
    <form>
      
      {age>18 && name==='Modi'? (
        <div>
          <h1>{id}</h1>
        <h1>You are eligible</h1>
        <button onClick={increaseId}>Increade Id</button>
        <input type="email" placeholder='Enter your email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter your password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleRegister}>Submit</button>
        <h2>Registered users are:</h2>
        <h3>{email} and {password}</h3>
        </div>
      ): <h1>You are not eligible</h1>}
      
      
    </form>
  )
}

export default Register