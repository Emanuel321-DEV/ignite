import "./styles/global.css";
import styles from "./styles/App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Emanuel Henrique"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati necessitatibus, rem ut dolorem dicta odio. Doloribus aut architecto neque consectetur, voluptas labore dolores expedita nisi? Fuga atque voluptatem unde nulla."
          />
        </main>
      </div>
    </>
  )
}

export default App
