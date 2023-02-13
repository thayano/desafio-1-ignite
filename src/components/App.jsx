import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Newtask } from './Newtask'
import { Taskcreate } from './Taskcreate'
import { TaskList } from './TaskList'

export function App() {
  const [ task, setTask ] = useState("")
  const [itemsList, setItemsList] = useState(['']);


  function changeInput(event ){
    const inputEvent =  event.target.value;
    setTask(inputEvent)
  }

  function addTask(event) {
    if(!task){
      return
    };
    event.preventDefault();
    setItemsList([...itemsList, task]);
    setTask("");
    console.log(task)
  }

  return (
    <div>

      <Header/>
      <Newtask/>
      
      
    </div>
  )
}


