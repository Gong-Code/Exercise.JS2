import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header"
import { AddCustomerForm } from './components/AddCustomerForm';
import { CustomerList } from "./components/CustomerList"
import { useState } from 'react';

const App = () => {
  
  const [customers, setCustomers] = useState([
    {
      id: uuidv4(),
      name: 'Gong Moonphruk'
    },
    {
      id: uuidv4(),
      name: 'John Sharp'
    }
  ])

  const addCustomer = (customerName) => {
    setCustomers(prevState => {
      return [...prevState, { id: uuidv4(), name: customerName}]
    })
  }

  const onDeleteCustomer = (id) => {
    setCustomers(prevCustomer => {
      return prevCustomer.filter(customer => customer.id !== id)
    })
  }

  return (
    <div>
      <Header title="Customer Management" />
      <AddCustomerForm addCustomer={addCustomer} />
      <main className='container'>
        <CustomerList customers={customers} onDeleteCustomer={onDeleteCustomer} />
      </main>
    </div>
  )
}

export default App