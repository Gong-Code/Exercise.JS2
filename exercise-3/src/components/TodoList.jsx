import { useEffect, useState } from "react"
import { Todo } from "./Todo"
import { AddTodoForm } from "./AddTodoForm"


export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [url, setUrl] = useState('https://js1-todo-api.vercel.app/api/todos?apikey=f7fd3a3c-eb82-4a22-921c-5e6c0ec86967')

    useEffect(() => {
        fetch(url)
        .then((response) => {
            if(!response.ok){
                console.log(`status: ${response.status}`)
                return
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
            setTodos(data)
        })
    }, [url])

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    }

    const renderTodos = () => {
        return todos && todos.map(todo => {
            return <Todo key={todo._id} todo={todo} todos={todos} setTodos={setTodos} deleteTodo={deleteTodo}  />
        })
    }

    return (
        <ul className="todo-list">
            <AddTodoForm setTodos={setTodos} />
            {renderTodos()}
        </ul>
    )
}
