import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Services/firebase/firebase'

const ItemDetailContainer = ()=> {

    const { itemId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=> {
        getDocs(collection(db, 'items')).then((snapshot) => {
        const items = snapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        })
        console.log('item: ',items.find(product => product.id === itemId))
        setProduct(items.find(product => product.id === itemId))
    })

    },[itemId])


    return (
        <>
        {product.id !== undefined ?
            <ItemDetail key={itemId} item={product} itemId={itemId}/>
            :
            <Spinner animation="border" role="status" className="m-5">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </>  
    )
}

export default ItemDetailContainer