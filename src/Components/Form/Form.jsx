import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { CartContext } from "../../Context/CartContext";

const OrderForm = () => {

  const { cart, total } = useContext(CartContext)

  const [form, setForm] = useState({name: '', phone: '', email: ''});

  const getForm = (e)=> {
    const {name, value} = e.target
    setForm({[name]: value
    });
  };

  const date = new Date()

  const dispatchPurchase = () => {
    const newOrder = {
      buyer: {name : form.name, phone : form.phone, mail: form.mail},
      items: cart,
      date: date,
      total: total() 
    }
    console.log(JSON.stringify(newOrder))
    
  }

    return (
        <>
        <Form style={{width: '50%', margin: 'auto', marginBottom: '40px', marginTop: '40px'}}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" onChange={getForm} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Phone" onChange={getForm} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={getForm} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button type="button" onClick={dispatchPurchase}>Submit</Button>

        </Form>
        </>
    )
}

export default OrderForm 