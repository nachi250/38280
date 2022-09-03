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
        } else {
            setCart([...cart, {item: item, quantity: qty}])
        }
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
            <CartContext.Provider value= {{cart, addItem, totalCart, cleanCart}}>
                {children}
            </CartContext.Provider>
            </>
    )
}

export default CartContextProvider 