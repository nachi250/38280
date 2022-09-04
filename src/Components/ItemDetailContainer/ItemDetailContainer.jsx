import ItemDetail from "../ItemDetail/ItemDetail";
import { getItems} from '../../Services/getItem'
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = ()=> {

    const { itemId } = useParams()

    const [items, setItems] = useState([])
    const [item, setItem] = useState({})

    useEffect(()=>{
        const items = getItems()
        items.then(items => {
            setItems(items)
            setItem(items.find(item => item.id == itemId))
        })
    }, [itemId]);


    return (
        <>
        {items.length > 0 ?
            <ItemDetail key={itemId} item={item} itemId={itemId}/>
            :
            <Spinner animation="border" role="status" className="m-5">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </>  
    )
}

export default ItemDetailContainer