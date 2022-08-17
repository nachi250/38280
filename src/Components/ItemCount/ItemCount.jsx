import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const ItemCount = ({stock, inicial, onAdd})=> {

    const [count, setCount] = useState(inicial)

    const increment = ()=> {
        if (count < stock) {
            setCount (count + 1) 
        }
    }

    const decrement = ()=> {
        if (count > 1) {
        setCount (count -1) 
        }
    }

    const buy = ()=> {
        console.log(count)
    }

    return (
        <div>
            <Container>
            <Button variant="primary" onClick={increment}> + </Button>{' '}
            <span> <h1>{count}</h1></span>
            <Button variant="primary" onClick={decrement}> - </Button>{' '}
            </Container>
            
            <Container>
            <Button variant="primary" onClick={buy}>On Add</Button>{' '}
            </Container>
        </div>
    )
}
export default ItemCount