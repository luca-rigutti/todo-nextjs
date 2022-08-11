import React from 'react'
import Card from "./card"

export default function TodoList({list}) {
    const names = []
    console.log(list)
    list.forEach((data,index) => {
        names.push(<Card title={data} description="" key={index}></Card>)
    })
    return(
        <div>
            {names}
        </div>
    )
}
