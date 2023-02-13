import style from './Newtask.module.css'
import React, { ChangeEvent, useState } from "react";
import icon from '../assets/mais_icon.png'
import { TaskList } from './TaskList';
import { Taskcreate } from './Taskcreate';

export function Newtask() {
  return (
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
        <img className={style.img} src={icon}/>
      </button>
      <TaskList itemsList={itemsList} />
      <Taskcreate itemsList={itemsList}/>
     
    </div>
  )
}

