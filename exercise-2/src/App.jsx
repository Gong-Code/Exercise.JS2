import { useState } from "react"
import { ShoppingList } from "./components/ShoppingList"
import { Header } from "./components/Header"
import { AddItemForm } from "./components/AddItemForm"

function App() {

  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      product: 'Meat',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Milk',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Bread',
      completed: false
    },
  ])

  const addItem = (product) => {
    setItems(prevItems => {
      const newItem = {
        id: crypto.randomUUID(),
        product,
        completed: false
      }
      return [newItem, ...prevItems]
    })
  }

  const clearList = () => {
    setItems([])
  }

  const toggleComplete = (item)  => {
    const newItems = items.map(_item => {
      if(_item.id === item.id){
        _item.completed = !item.completed
      }
      return _item
    })
    setItems(newItems)
  }

  const changeItemText = (item, newText) => {
    const newItems = items.map(_item => {
      if(item.id === _item.id){
        item.product = newText
      }
      return _item
    })
    setItems(newItems)
  }

  const removeItemById = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className="container">
      <div className="card">
        <Header title="Shopping List" clearList={clearList} />
        <ShoppingList 
          items={items} 
          toggleComplete={toggleComplete} 
          changeItemText={changeItemText}
          removeItemById={removeItemById}
        />
        <AddItemForm  addItem={addItem}/>
      </div>
      
    </div>
  )
}

export default App
