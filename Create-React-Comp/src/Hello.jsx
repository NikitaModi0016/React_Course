function Hello(){
  let myName='Nikita';
  let FullName=()=>{
    return 'Nikita Modi';
  }
  return(
    <div>
      <h3>Hello This is the Future Speaking. I am {myName} and my full name is {FullName()}</h3>
    </div>
  )
}
export default Hello;