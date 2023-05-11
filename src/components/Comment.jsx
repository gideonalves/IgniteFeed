import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'


export function Comment({content}) {

    function handleDeleteComment() {
        console.log('deletar');
    }

    return (
        <div className={styles.comment}>            
            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/66545644?v=4" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='06 de Maio às 8:13h' dateTime='2023-05-06 08:13:30'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button 
                            onClick={handleDeleteComment}
                            title='Deletar comentário'>
                            <Trash size={24}/> 
                        </button>
                    </header>

                    <p>{content}</p>
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