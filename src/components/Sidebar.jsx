import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw4fHxkZXZ8ZW58MHx8fHwxNjgzMzMwOTEz&ixlib=rb-4.0.3&q=500&w=500" />

            <div className={styles.profile}>
              
                <Avatar src="https://avatars.githubusercontent.com/u/6643122?v=4"/>
                <strong>Gideon Alves</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}