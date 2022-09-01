import ItemDetail from "../ItemDetail/ItemDetail";
import { getItems} from '../../Services/getItem'
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
            <ItemDetail key={itemId} item={item} itemId={itemId}/>
    )
}

export default ItemDetailContainer