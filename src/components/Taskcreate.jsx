import style from './Taskcreate.module.css'
import vector from '../assets/vector.png' 
import lixo from '../assets/trash.png'


export function Taskcreate (props){
  return (
    <div className={style.list}>
      <img src={vector}/>
      <span className={style.text}>{props.text}</span>
      <img src={lixo}/>
    </div>
  )
}

