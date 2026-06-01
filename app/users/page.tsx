import React, { useState } from 'react'

function Users() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  return (
<>
<h1>Hello World</h1>
<h2>Users Telll me </h2>
<div>
  <button>Click me</button>
  <form>
    <input type="Email" placeholder="Enter your email"/>
    <input type="password" placeholder="Enter your password"/>
     <button type="submit">Submit</button>
  </form>
</div>
</>
  )
}

export default Users