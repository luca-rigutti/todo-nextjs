import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todoadd from '../comps/todo-add'
import TodoList from '../comps/todo-list'
import { useState } from 'react'

export default function Home() {

  const [list, setList] = useState([]);

  const addToList = (childdata) => {
    setList([...list,childdata])
  }
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        <Todoadd addToList={addToList}></Todoadd>
        <TodoList list={list}></TodoList>
      </main>

    </div>
  )
}
