import { useEffect, useState } from "react"

export const Todo = ({ todo, setTodos }) => {

    
    const [url, setUrl] = useState(`https://js1-todo-api.vercel.app/api/todos/${todo._id}?apikey=f7fd3a3c-eb82-4a22-921c-5e6c0ec86967`)
    
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error: ' + response.status);
            }
            const data = await response.json();
            console.log('Todo deleted:', data);
            setTodos(prevState => prevState.filter(todo => todo._id !== id)); // Remove the deleted todo from the todos state
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        setUrl(`https://js1-todo-api.vercel.app/api/todos/${todo._id}?apikey=f7fd3a3c-eb82-4a22-921c-5e6c0ec86967`);
    }, [todo._id]);


    return (
        <>
            <li className="todo-item">
                <p>{todo.title}</p>
                <span>
                    <i className="fa-solid fa-circle-check"></i>
                    <i className="fa-solid fa-circle-minus" onClick={() => deleteTodo(todo._id)} ></i>    
                </span>
            </li>
        </>
    )
}
