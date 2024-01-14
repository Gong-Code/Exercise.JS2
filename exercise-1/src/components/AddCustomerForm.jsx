import { useState } from "react"

export const AddCustomerForm = ({ addCustomer }) => {

    const [customerName, setCustomerName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(customerName.trim() === '') return

        addCustomer(customerName)
        setCustomerName('')
    }

    return (
        <form className="mt-4 d-flex" onSubmit={handleSubmit}>
            <div className="input-group w-25 mx-auto">
                <input className="form-control form-control-md" type="text" value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)} />
                <button className="btn btn-primary">Add Customer</button>
            </div>          
        </form>
    )
}
