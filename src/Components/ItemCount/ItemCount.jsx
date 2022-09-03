import Button from 'react-bootstrap/Button';
import { Container, Col, Row, Stack } from 'react-bootstrap';

const ItemCount = ({increment, decrement, onConfirm, count})=> {

    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Stack direction="horizontal" gap={3}>
                            <Button variant="primary" onClick={increment}> + </Button>{' '}
                            <span> <h1>{count}</h1></span>
                            <Button variant="primary" onClick={decrement}> - </Button>{' '} 
                        </Stack>
                    </Col>
                    <Col></Col>    
                </Row> 
            </Container>
            <Container>
                <Button variant="primary" onClick={onConfirm}>Add to cart</Button>{' '}
            </Container>
        </div>
    )
}
export default ItemCount