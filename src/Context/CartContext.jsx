import { React, createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [ cart, setCart] = useState([])

    const totalCart = ()=> {
        let total = 0
        cart.forEach(item => { total += item.quantity })
        return total;
    }

    const total = () => {
        let total = 0
        cart.forEach(item => {total += item.quantity * item.item.price })
        return total;
    }

    const addItem = (item, qty)=> {
        console.log('add item: Item; ',item, 'Cantidad:', qty)
        const flag = isInCart(item)
        console.log(flag)
        if (flag) {
            console.log('Cart obj:', cart[0].item)
            let itemExist = cart.find(product => product.item.id === item.id)
            console.log(`Item Exist: ${itemExist}`)
            console.log(`Item Exist qty: ${itemExist.quantity}`)
            itemExist.quantity += qty
            console.log(`Item Exist new qty: ${itemExist.quantity}`)
            console.log('item.product: ',item)
            console.log('item filtrado new cart: ',cart.filter (product => product.item.id !== item.id))
            let newCart = cart.filter (product => product.item.id !== item.id) // > problem
            console.log(` new cart: ${newCart}`)
            setCart([...newCart, itemExist])
            console.log(`cart con repetido: ${cart}`)
            console.log('total', total())
        } else {
            setCart([...cart, {item: item, quantity: qty}])
            console.log('cart sin repetido: ',cart)
            console.log('total', total())
        }
    }

    const removeItem = (e) => {
        const itemId = e.target.getAttribute('id')
        console.log('Remove ID: ',itemId)
        let newCart = cart.filter(item => item.item.id !== itemId)
        setCart([...newCart])
    }

    const isInCart = (item) => {
        console.log(`is in cart ${item.id}`);
        return cart.some(producto => producto.item.id === item.id );
    }

    const cleanCart = () => {
        setCart([])
    }


    return (
            <>
            <CartContext.Provider value= {{cart, addItem, totalCart, cleanCart, removeItem, total}}>
                {children}
            </CartContext.Provider>
            </>
    )
}

export default CartContextProvider 