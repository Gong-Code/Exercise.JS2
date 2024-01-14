
export const Customer = ({ customer, onDeleteCustomer }) => {

    return (
        <tr>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>
                <button onClick={() => onDeleteCustomer(customer.id)} className="btn btn-danger">Remove Customer</button>
            </td>
        </tr>
    )
}
