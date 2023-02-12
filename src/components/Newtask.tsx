import style from './Newtask.module.css'
import icon from '../assets/mais_icon.png'
export function Newtask() {
  return (
    <div className={style.content}>
      <input className={style.ipt} type="text" placeholder='Adicione uma nova tarefa' />
      <button type='button' className={style.btn}>
        <strong>Criar</strong>
        <img className={style.img} src={icon}/>
      </button>
    </div>
  )
}

