import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todoadd from '../comps/todo-add'
import TodoList from '../comps/todo-list'
import Navbar from '../comps/navbar'
import { useState, useEffect } from 'react'

export default function Home() {

  const [list, setList] = useState([]);
  const [isListLoaded, setIsListLoaded] = useState(false);

  // Load list from localStorage on client-side after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedList = window.localStorage.getItem('list');
      if (savedList) {
        setList(JSON.parse(savedList));
      }
      setIsListLoaded(true);
    }
  }, []);

  // Update localStorage whenever 'list' changes
  useEffect(() => {
      if (isListLoaded && typeof window !== 'undefined') {
        window.localStorage.setItem('list', JSON.stringify(list));
      }
    }, [list]);

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

        <main className="container gap-3">
          <Todoadd addToList={addToList}></Todoadd>
          <TodoList list={list}></TodoList>
        </main>

      </div>
    </>
  )
}
