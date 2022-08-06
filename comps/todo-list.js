import React from 'react'

export default function TodoList({list}) {
    const names = []
    console.log(list)
    list.forEach((data,index) => {
        names.push(<h3 className='elementTodo' key={index}>{data}</h3>)
    })
    return(
        <div>
            {names}
        </div>
    )
}
