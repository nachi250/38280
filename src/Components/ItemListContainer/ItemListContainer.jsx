import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getItems } from '../../Services/getItem';
import Spinner from 'react-bootstrap/Spinner';


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
            <Spinner animation="border" role="status" className="m-5">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </>  
    )
}

export default ItemListContainer