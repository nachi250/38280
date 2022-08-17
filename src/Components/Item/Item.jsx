import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item})=>{
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  $ {item.price}.
                </Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default Item