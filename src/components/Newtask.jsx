import style from './Newtask.module.css'
import React, { ChangeEvent, useState } from "react";
import icon from '../assets/mais_icon.png'
import { TaskList } from './TaskList';
import { Taskcreate } from './Taskcreate';

export function Newtask() {
  const [task, setTask] = useState("")
  const [itemsList, setItemsList] = useState(['']);
  const [contTask, setContTask] = useState(0)


  function changeInput(event) {
    const inputEvent = event.target.value;
    setTask(inputEvent)

  }

  function addTask(event) {
    if (!task) {
      return
    };
    event.preventDefault();
    setItemsList([...itemsList, task]);
    setTask("");
    setContTask(contTask + 1)
    console.log(contTask)
  }
  return (
    <>
    <div className={style.content}>
      <input
        className={style.ipt}
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={task}
        onChange={changeInput}
      />
      <button type='button' className={style.btn} onClick={addTask}>
        <strong>Criar</strong>
        <img className={style.img} src={icon} />
      </button>
     
    </div>
    <div>
           <TaskList lista={itemsList} cont={contTask}></TaskList>
    </div>
    </>
  )
}

