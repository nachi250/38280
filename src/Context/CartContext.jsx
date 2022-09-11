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

    const addItem = (item, qty)=> {
        console.log('Item; ',item, 'Cantidad:', qty)
        const flag = isInCart(item)
        console.log(flag)
        if (flag) {
            let itemExist = cart.find(item => item.product === item)
            itemExist.qty += qty

            let newCart = cart.filter (item => item.product !== item)
            setCart([...newCart, itemExist])
            console.log(newCart)
        } else {
            setCart([...cart, {item: item, quantity: qty}])
            console.log(cart)
        }
    }

    const removeItem = (e) => {
        const itemId = e.target.getAttribute('id')
        console.log('Remove ID: ',itemId)
        let newCart = cart.filter(item => item.item.id !== itemId)
        setCart([...newCart])
    }

    const isInCart = (item) => {
        console.log(item);
        return cart.some(producto => producto.item === item );
    }

    const cleanCart = () => {
        setCart([])
    }


    return (
            <>
            <CartContext.Provider value= {{cart, addItem, totalCart, cleanCart, removeItem}}>
                {children}
            </CartContext.Provider>
            </>
    )
}

export default CartContextProvider 