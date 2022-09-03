import { useState } from "react"
import { useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemList from "../ItemList/ItemList"
import { getItems } from '../../Services/getItem'


const ItemListContainer = (props)=> {

    const [items, setItems] = useState([])

    useEffect(()=>{
        const items = getItems()
        items.then(items => {
            setItems(items)
        })
    }, [])
 
    return (
        <>
        {items.length > 0 ?
            <ItemList items={items}/>
            :
            <h1> Cargando... </h1>
        }
        </>  
    )
}

export default ItemListContainer