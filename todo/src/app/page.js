"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"
import next from 'next'
import Navigation from '@/components/navigation'
import { useState } from 'react'


const todos = [
    { id: 1, description: 'Einkaufen gehen', completed: false },
    { id: 2, description: 'React-App erstellen', completed: true },
    { id: 3, description: 'Übungen für JavaScript machen', completed: false },
  ]

export default function Home() {
  const [myTodos, setMyTodos] = useState(todos)
  const [newTodo, setNewTodo] = useState("") 

  const handleaddTodo = () => {
   setMyTodos(
    [...myTodos, {id: myTodos.length + 1, description: newTodo}]
   )
   setNewTodo("")
  }
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  }

  return (
    <div>
      <main>
        <h1>Welcome!</h1>
        <Navigation/>
        <ul>
        { myTodos.map(todo => {
          return (
            <li key={todo.id}>{todo.description}</li>
          )
        })}
        </ul>
        <input value={newTodo} type="text" onChange={handleInputChange}></input>        
        <button onClick={() => handleaddTodo()} >Add Todo</button>
      </main>
    </div>
  )}