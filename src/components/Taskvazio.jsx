import style from './Taskvazio.module.css'
import clipIcon from '../assets/clipboard.png'

export function Taskvazio() {
  return (
        <div className={style.text}>
          <img src={clipIcon} alt="clip"/>
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
  )
}

