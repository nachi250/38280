import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "react-bootstrap";

const Cart = ()=> {
    const {cleanCart, totalCart} = useContext(CartContext)

    return (
        <>
            <div><h1>Hola Soy un carrito en construcción!</h1></div>
            <div><h1>Total de productos en carrito: {totalCart()}</h1></div>
            <Button variant="primary" onClick={cleanCart}>Clean cart</Button>
        </>
    )
}

export default Cart