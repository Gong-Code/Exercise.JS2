import { ListItem } from "./ListItem"

export const ShoppingList = ({ items, toggleComplete, changeItemText, removeItemById  }) => {

    return (
        <div className="ShoppingList">
            {
                items && items.map(item => {
                    return <ListItem 
                    item={item} 
                    toggleComplete={toggleComplete} 
                    changeItemText={changeItemText}
                    removeItemById={removeItemById}
                    key={item.id} />
                })
            }
        </div>
    )
}
