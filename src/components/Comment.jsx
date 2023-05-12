import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return likeCount + 1
         })
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
                    <button onClick={handleLikeComment}>
                      <ThumbsUp />
                       Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}