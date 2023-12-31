import { PencilLine } from "@phosphor-icons/react";
import styles from "../styles/Sidebar.module.css";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                
                <strong>Emanuel Henrique</strong>
                <span>FullStack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}