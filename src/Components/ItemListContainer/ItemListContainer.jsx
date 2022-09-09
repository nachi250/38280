import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getItems } from '../../Services/getItem';
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Services/firebase/firebase'
import { useParams } from "react-router-dom";

// Productos locales
const ItemListContainer = (props)=> {

    const [items, setItems] = useState([])
    const {categoryId} = useParams() 

    useEffect(()=>{
        const items = getItems()
        items.then(items => {
            setItems(items)
        })
    }, [])
 

// Productos Firestore
const [products, setProducts] = useState([])

useEffect(()=> { 

  getDocs(collection(db, 'items')).then((snapshot) => {
    const items = snapshot.docs.map(doc =>{
      return {id: doc.id, ...doc.data()}
    })
    console.log(categoryId)
    console.log('item filtrado por categoria: ',items.filter(product => product.category === categoryId))
    if (categoryId === undefined){
      setProducts(items)
      
    } else {
      setProducts(items.filter(product => product.category === categoryId))
    }
  })

}, [categoryId])

    return (
        <>
        {items.length > 0 ?
            <ItemList items={products}/>
            :
            <Spinner animation="border" role="status" className="m-5">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </>  
    )
}

export default ItemListContainer