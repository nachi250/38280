import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({item})=> {

    const {addItem} = useContext(CartContext)

    const [count, setCount] = useState(1);
    const [buy, setBuy] = useState(true);

    const increment = ()=> {
        if (count < item.stock) {
            setCount (count + 1) 
        }
    }

    const decrement = ()=> {
        if (count > 1) {
        setCount (count -1) 
        }
    }

    const addToCart = () => {
        console.log(`Added to cart ${count} units of ${item.title}`)
        setBuy(false)
        handlePurchase()
    }

    const handlePurchase = () => {
        addItem(item, count)
    }


    return (

            <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px'}}>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Subtitle className="mb-2 text-muted">$ {item.price}</Card.Subtitle>
                <Card.Text>
                    {item.description}
                </Card.Text>
                {buy?
                    <ItemCount increment={increment} decrement={decrement} onConfirm={addToCart} count={count}/>
                    :
                    <Button variant="primary"> <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/cart`}>To Cart</NavLink> </Button>
                }
            </Card.Body>
        </Card>

    )
}

export default ItemDetail