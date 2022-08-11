import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todoadd from '../comps/todo-add'
import TodoList from '../comps/todo-list'
import Navbar from '../comps/navbar'
import { useState } from 'react'

export default function Home() {

  const [list, setList] = useState([]);

  const addToList = (childdata) => {
    setList([...list,childdata])
  }
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Navbar></Navbar>

        <main class="container gap-3">
          <Todoadd addToList={addToList}></Todoadd>
          <TodoList list={list}></TodoList>
        </main>

      </div>
    </>
  )
}
