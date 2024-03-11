import React,{useState} from 'react'

function UseStateHook() {
  // const array=useState(0);
  // const counter=array[0];
  // const setCounter=array[1];
  //console.log(array);
  //instead of above 3 line write below one line of code

  const [counter,setCounter]=useState(0);
  const [naam,setName]=useState("");
  function increaseCounter(){
    setCounter(counter+1)
  }
  
  
  return (
    <div>
      <input type='text' onChange={(e)=>setName(e.target.value)}/>
      <h1>{naam} has clicked {counter} times</h1>
      <button onClick={increaseCounter}>Increase</button>

    </div>
  )
}

export default UseStateHook