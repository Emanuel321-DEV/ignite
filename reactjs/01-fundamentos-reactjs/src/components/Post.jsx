import styles from "../styles/Post.module.css";
export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de Maio às 11:00" dateTime="2022-05-11 00:00:00">
                    Publicado há 1hr
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">👉 jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>
        </article>
    )
}