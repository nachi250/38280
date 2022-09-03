import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom'

const Item = ({item})=>{
    return (
        <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}>
            <Card.Img variant="top" src={item.pictureUrl}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  $ {item.price}.
                </Card.Text>
                <Button variant="primary"> <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`item/${item.id}`}>Detail </NavLink> </Button>
            </Card.Body>
        </Card>
    )
}

export default Item