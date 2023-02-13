import style from './Taskcreate.module.css'
import vector from '../assets/vector.png' 
import lixo from '../assets/trash.png'


export function Taskcreate (props){
  return (
    <div className={style.list}>
      {props.itemsList.map((item, index) => (
        <><img src={vector} />
          <span className={style.text}
            key={index}>{item}</span>
          <img src={lixo} /></>
      ))}
    </div>
  )
}

