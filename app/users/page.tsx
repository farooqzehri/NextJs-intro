import { log } from 'node:console'
import React from 'react'

const Users = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    console.log(users);
    
  return (
    <>
    {users.map((user: any) => {
        return(
            <div key={user.id}>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
            </div>
        )
    })}
    </>
  )
}

export default Users