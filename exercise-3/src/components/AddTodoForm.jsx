import { useState } from "react"

export const AddTodoForm = ({ setTodos }) => {

    const [inputValue, setInputValue] = useState('')
    const [url, setUrl] = useState('https://js1-todo-api.vercel.app/api/todos?apikey=f7fd3a3c-eb82-4a22-921c-5e6c0ec86967')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({ title: inputValue })

        }).then((response) => {
            if(response.status !== 201){
                console.log(`status: ${response.status}`)
                return
            }
            return response.json()

        }).then(data => {
            setTodos(prevTodos => [...prevTodos, data])
        })

        setInputValue('')
        
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setInputValue(event.target.value )
    }

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <div className="form-group">
                <input className="form-control" type="text" value={inputValue} onChange={handleInputChange} />
                <button >ADD</button>
            </div>
        </form>
    )
}
