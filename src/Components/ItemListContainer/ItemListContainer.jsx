import { useState } from "react"
import { useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = (props)=> {

    const productsList = [
        {
            id: 1, title:'Iphone 13',
            price: 452.999,
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_788137-MLA49589748936_042022-F.webp'
        },
        {   
            id: 2,
            title:'Mac Book',
            price: 261.999,
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_648428-MLA46516517286_062021-F.webp'
        }, 
        {  
            id: 3,
            title:'Apple Watch',
            price: 140.999,
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_858093-MLA48096508611_112021-F.webp'
        }
    ]

    const [products, setProducts] = useState([])

    const get = ()=>{
        setTimeout(()=>{
            return(console.log(productsList))
        }, 2000)
        
    }

    const getProducts = ()=> {
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(productsList)
                setProducts(productsList)
            },2000)   
        })}
    getProducts()

    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount inicial={1} stock={10}/>
            <ItemList items={products}/>
        </div>
    )
}

export default ItemListContainer