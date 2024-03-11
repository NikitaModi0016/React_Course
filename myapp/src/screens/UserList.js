import React from 'react'

function UserList() {
  let data=[
    {
      name:"Nikita",
      email:'nikita@gmail.com',
      id:'20'
    },
    {
      name:"Sheela",
      email:'sheela@gmail.com',
      id:'40'
    },
    {
      name:"Diksha",
      email:'diksha@gmail.com',
      id:'50'
    },
    {
      name:"Soneya",
      email:'soneyaa@gmail.com',
      id:'24'
    },

]
  return (
    <div>{data.map((props)=>{
      return(
        <div>
          <h2>{props.name}</h2>
          <h3>{props.email}</h3>
          <h3>{props.id}</h3>
        </div>
      )
    })}</div>
  )
}

export default UserList