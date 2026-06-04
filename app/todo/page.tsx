"use client"
import React, { useState } from 'react'

function Todo() {
  const [input , setInput] = useState('')
  const [todos , setTodos] = useState()

  const addTodo = () => {
    console.log(todos);
  }
  return (
    <>
    <h1>Hello Todo</h1>

    <input type="text" placeholder='Enter Your Todo.' value={input} onChange={e => setInput(e.target.value)}/>
    <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default Todo