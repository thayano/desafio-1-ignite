import style from './Tasklist.module.css'
import clipIcon from '../assets/clipboard.png'

export function TaskList() {
  return (
    <div className={style.content}>
      <header className={style.head}>
        <div className={style.headText}> 
          <strong className={style.textCriado}>Taferas criadas</strong>
          <span className={style.cont}>0</span>
        </div>
        <div className={style.headText}>
          <strong className={style.textConcluido}>Concluidas</strong>
          <span className={style.cont}>0</span>
        </div>        
      </header>
      <div className={style.conteudo}>
        <img src={clipIcon} alt="clip" />
        <div className={style.text}>
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        
      </div>
    </div>
  )
}

 