import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-bootstrap';

const ItemDetail = ({item, itemId})=> {

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Subtitle className="mb-2 text-muted">$ {item.price}</Card.Subtitle>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <NavLink>Add to cart</NavLink>
                <NavLink>Continue buyimg</NavLink>
                <ItemCount stock={item.stock} inicial={1}/>
            </Card.Body>
        </Card>
        </> 
    )
}

export default ItemDetail