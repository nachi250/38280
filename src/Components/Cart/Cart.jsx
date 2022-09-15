import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Form from '../Form/Form'



const Cart = ()=> {
    const {cleanCart, cart, removeItem, total} = useContext(CartContext)

    const [ order, setOrder] = useState(false)

    const handleOrder = () => {
        cart.length > 0 ? setOrder(true) : alert('Añade productos al carrito')
    }

    return (
        <>
        <Table striped bordered hover className="m-auto mt-3" style={{width: '80%'}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
                {cart.map((item)=>{
                    return (
                    <tr key={item.item.id}>
                        <td>{item.item.id}</td>
                        <td>{item.item.title}</td>
                        <td>{item.quantity}</td>
                        <td>$ {item.item.price}</td>
                        <td>
                            <svg id={item.item.id} onClick={removeItem} style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </td>
                    </tr>
                )}
                )}

                <tr>
                    <th></th>
                    <th></th>
                    <th>Total: </th>
                    <th>$ {total()}</th>
                    <th></th>
                </tr>
                
            </tbody>
        </Table>
        
        {order === false? 
        <>
        <Button variant="success" onClick={handleOrder} className='m-3'>Set Order</Button>
        <Button variant="warning" onClick={cleanCart} className='m-3'>Clean cart</Button>
        </>
        :
        <Form/>
        }
        </>
    )
}

export default Cart