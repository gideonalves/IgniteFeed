import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/66545644?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Gideon Alves</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='06 de Maio às 8:13h' dateTime='2023-05-06 08:13:30'>
                    Publicado à 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da </p><p>Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=""> jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>    
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>


        </article>
    )
}    