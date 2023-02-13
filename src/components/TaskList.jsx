import style from './Tasklist.module.css'
import { Taskcreate } from './Taskcreate'
import { Taskvazio } from './Taskvazio'

export function TaskList(props) {
  const verificaLista = props.lista.item;
  console.log(verificaLista)
  return (
    <div className={style.content}>
      <header className={style.head}>
        <div className={style.headText}>
          <strong className={style.textCriado}>Taferas criadas</strong>
          <span className={style.cont}>{props.cont}</span>
        </div>
        <div className={style.headText}>
          <strong className={style.textConcluido}>Concluidas</strong>
          <span className={style.cont}>0</span>
        </div>
      </header>
      <div className={style.conteudo}>
        { verificaLista ? '' : <Taskvazio/>}
        {props.lista.map((item) => item ? <Taskcreate key={item} text={item}/> : '')}
      </div>
    </div>
  )
}

