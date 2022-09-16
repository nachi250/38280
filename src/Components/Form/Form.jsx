import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import { db } from '../../Services/firebase/firebase'
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

const OrderForm = () => {

  const { cart, total } = useContext(CartContext)

  const [form, setForm] = useState({name: '', phone: '', email: ''});
  const [ orderId, setOrderId ] = useState('')

  const getForm = (e)=> {
    const {name, value} = e.target
    setForm({
      ...form, [name]: value
    });
  };

  const date = new Date()

  const dispatchPurchase = (e) => {
    e.preventDefault()
    const newOrder = {
      buyer: {name: form.name, phone: form.phone, mail: form.mail},
      items: cart,
      date: date,
      total: total() 
    }
    console.log(`Buyer: ${newOrder.buyer}`)
    console.log(`Item: ${newOrder.items}`)
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, newOrder).then(({id})=> setOrderId(id)).then(console.log(`Id de compra: ${orderId}`))
    updateStock()
  }

  const updateStock = () => {
    cart.forEach((item) => {

        console.log(`updateStock: ${item.item.id}`)
        console.log(`item quantity update ${item.quantity}`)

        getDoc(doc(db, 'items', item.item.id)).then((documentSnapshot) => {
          console.log(`stock del prod en firebase: ${documentSnapshot.data().stock}`)

        const newStock = doc(db, 'items', item.item.id);
        updateDoc(newStock, {stock: documentSnapshot.data().stock - item.quantity})
                 
        })

    });
  };


    return (
        <>
        <Form style={{width: '50%', margin: 'auto', marginBottom: '40px', marginTop: '40px'}}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' placeholder="Name" onChange={getForm} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" name='phone' placeholder="Phone" onChange={getForm} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='mail' placeholder="Enter email" onChange={getForm} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button type="submit" onClick={dispatchPurchase}>Submit</Button>

        </Form>
        </>
    )
}

export default OrderForm 