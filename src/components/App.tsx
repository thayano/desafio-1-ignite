import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Newtask } from './Newtask'
import { TaskList } from './TaskList'

export function App() {
  return (
    <div>

      <Header/>
      <Newtask/>
      <TaskList/>
      
    </div>
  )
}


