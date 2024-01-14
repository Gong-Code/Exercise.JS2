import { useEffect, useRef, useState } from "react"

export const ListItem = ({ item, toggleComplete, changeItemText, removeItemById }) => {

    const [change, setChange] = useState(false)

    const toggleChangeText = () => {
        setChange(prevState => !prevState)
    }

    const onChangeText = (newText) => {
        changeItemText(item.id, newText)
        setChange(false)
    }

    const onRemoveItemById = () => {
        removeItemById(item.id)
    }

    const onToggleComplete = () => {
        toggleComplete(item)
    }

    return (
        <div className="list-item">
            {
                change 
                ? <ChangeForm item={item} onChangeText={onChangeText} /> 
                : <p onClick={onToggleComplete} className={`product-title ${item.completed && 'completed'}`}> {item.product}</p>
            }
        <div className="buttons">
            <button onClick={toggleChangeText} className="btn change-btn"><i className="fa-solid fa-pen"></i></button>
            <button onClick={onRemoveItemById} className="btn delete-btn"><i className="fa-solid fa-trash"></i></button>
        </div>           
        </div>
    )
}

const ChangeForm = ({ item, onChangeText }) => {

    const inputRef = useRef(null)
    const [text, setText] = useState(item.product)

    useEffect(() => {
        inputRef.current.focus()
        console.log(inputRef.current.value)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        onChangeText(text)
    }
    
    return(
        <form onSubmit={handleSubmit} className="change-form">
            <input ref={inputRef} type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button className="btn btn-check"><i className="fa-solid fa-circle-check"></i></button>
        </form>
    )
}
