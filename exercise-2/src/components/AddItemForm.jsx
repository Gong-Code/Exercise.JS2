import { useState } from "react"

export const AddItemForm = ({ addItem }) => {

    const [productTitle, setProductTitle] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(productTitle.trim() === ''){
            setError('You need to enter some text')
            return
        }

        addItem(productTitle)

        setError(null)
        setProductTitle('')
    }
    
    return (
        <form onSubmit={handleSubmit} className="add-form">
            <div className="form-group">
                <input className="form-control" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} type="text"></input>
                <button>ADD</button>
            </div>
            {error && <p className="error">{error}</p>}        
        </form>
    )
}
