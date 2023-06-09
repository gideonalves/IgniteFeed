import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/66545644?v=4',
      name: 'Diego Fernandes',
      role: 'Cto @Rocketseat'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋',},

     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

     { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-07 22:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/66545644?v=4',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋',},

     { tipe: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

     { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-010 22:00:00')
  },
]

export function App() {
  return (
    
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { post.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
             )
          }) }
        </main>
      </div>
    </div>
  )
}


