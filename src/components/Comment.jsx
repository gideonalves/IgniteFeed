import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'


export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/66545644?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='06 de Maio às 8:13h' dateTime='2023-05-06 08:13:30'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/> 
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                </footer>
            </div>
        </div>
    )
}