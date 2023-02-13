import foguete from '../assets/foguete.png'
import style from './Header.module.css'


export function Header() {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <img className={style.img} src={foguete}/>
        <span className={style.text}>
          <strong className={style.textTo}>to</strong>
          <strong className={style.textDo}>do</strong>
        </span> 
      </div>
    </header>
    
  )
}
