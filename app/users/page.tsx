import React, { useState } from 'react'

function Users() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const callme = () =>{
   alert(`Hello Your email is ${email} and `)

  }

  return (
<>
<h1>Hello World</h1>
<h2>Users Telll me </h2>
<div>
  <button onClick={callme}>Click me</button>
  <form>
    <input type="Email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)  }/>
     <button type="submit">Submit</button>
  </form>
</div>
</>
  )
}

export default Users